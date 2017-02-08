require('../week-view/week-view.module');
require('../side-bar/side-bar.module');
require('../view-selector/view-selector.module');
require('../tabbar/tabbar.module');

var angular = require('angular');

module.exports = angular.module('balance.module', [
    'week-view.module',
    'side-bar.module',
    'view-selector.module',
    'tabbar.module'
]);