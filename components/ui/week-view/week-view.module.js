require('../day-view/day-view.module');
require('../common/common.module');
var angular = require('angular');

module.exports = angular.module('week-view.module', [
    'common.module',
    'day-view.module'
]);