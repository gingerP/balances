require('./common-db.factory');
var DbModule = require('../db.module');
var logger = require('../../logger').create('aggregation db');

DbModule.factory('aggregationDbFactory', BalancesDbFactory);

function BalancesDbFactory(commonDbFactory) {
    function getYear(year) {

    }

    function getMonth(year, month) {

    }

    return {
        getMonth: getMonth,
        getYear: getYear
    }
}