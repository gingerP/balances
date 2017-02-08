require('../common/common.module');
var angular = require('angular');

module.exports = angular.module('year-view.module', [
    'common.module',
    'day-view.module'
]);