require('./balance/components/balance.component');

require('angular-animate');
var angular = require('angular');

module.exports = angular.module('ui.module', [
    'balance.module'
]);