'use strict';

const appConfig = require('../../../config/app-config');
const _ = require('lodash');
var DbModule = require('../db.module');
var logger = require('../../logger').create('common db');
var Datastore = require('nedb');
var Promise = require('bluebird');
var collections = {};

DbModule.factory('commonDbFactory', CommonDbFactory);

function initBalances() {

}

function initAggregation() {

}

function CommonDbFactory() {

    function convertArguments(argz) {
        return _.map(argz, (item) => {
            return item;
        });
    }

    function removeError(argz) {
        let array = convertArguments(argz);

        array.splice(0, 1);

        return array;
    }

    function handle(reject, callback) {
        return function () {
            if (arguments[0]) {
                logger.error(arguments[0]);
                reject(arguments[0]);
            } else {
                callback(removeError(arguments));
            }
        }
    }

    function register(name) {
        return new Promise((resolve) => {
            collections[name] = new Datastore({
                filename: appConfig.db.directory + name,
                autoload: true,
                onload: (error, reject) => {
                    if (error) {
                        logger.error('Datastore %s failed!', name);
                        logger.error(error);
                        reject(error);
                    } else {
                        logger.debug('Datastore %s was load!', name);
                        resolve(collections[name]);
                    }
                }
            });
        });
    }

    function save(collectionName, doc) {
        return new Promise((resolve, reject) => {
            var id = doc._id;
            collections[collectionName].update(
                {_id: doc._id},
                doc,
                {
                    upsert: true,
                    returnUpdatedDocs: true
                },
                handle(reject, (num, docs) => {
                    logger.debug('%s: Document (id:%s) was saved!', collectionName, docs[0]._id);
                    resolve(docs[0]);
                })
            )
        });
    }

    function list(collectionName, criteria) {
        return new Promise((resolve, reject) => {
            collections[collectionName].find(
                criteria,
                handle(reject, (docs) => {
                    logger.debug('%s: Documents №%s were loaded!', collectionName, docs.length);
                    resolve(docs)
                })
            );
        });
    }

    return {
        register: register,
        save: save,
        list: list
    }
}