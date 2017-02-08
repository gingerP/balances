'use strict';

require('./common-db.factory');
const DbModule = require('../db.module');
const logger = require('../../logger').create('balances db');

DbModule.factory('BalancesDb', BalancesDbFactory);

function BalancesDbFactory(commonDbFactory) {
    const COLLECTION_NAME = 'balances';
    let collection;

    function listForPeriod(startDate, endDate) {
        return commonDbFactory.list(COLLECTION_NAME, {
            startDate: startDate,
            endDate: endDate
        });
    }

    function save() {}

    commonDbFactory.register(COLLECTION_NAME).then((db) => {
        collection = db;
    });

    return {
        save: save,
        listForPeriod: listForPeriod
    }
}