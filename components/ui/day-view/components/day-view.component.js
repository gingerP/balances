'use strict';

require('../../common/common-utils');
require('../../common/common-config');
require('../factories/day-view-config.factory');

var moment = require('moment');
var angular = require('angular');
var DayViewModule = require('../day-view.module');

DayViewModule.component('dayView', {
    bindings: {
        day: '='
    },
    templateUrl: './components/ui/day-view/partials/day-view.partial.html',
    controller: function(CommonUtils, CommonConfig,
                         DayViewConfig) {
        var vm = this;

        function applyDefaultBalances(balances) {
            var preparedBalances = angular.copy(balances);

            if (!balances || !balances.length) {
                preparedBalances = DayViewConfig.getDefaultBalances();
            } else {
                for(var index = 0; index < DayViewConfig.DEFAULT_BALANCES_NUMBER - balances.length; index++) {
                    preparedBalances.push(DayViewConfig.getDefaultBalanceItem());
                }
            }

            return preparedBalances;
        }

        function getBalances(balances) {
            return applyDefaultBalances(balances);
        }

        function init() {
            vm.balances = getBalances(vm.day.balances);
            vm.formattedDate = moment(vm.day.date).format(CommonConfig.FORMATS.DAY_VIEW_DATE);
        }

        function focusOut(balance) {

        }

        function focusIn(balance) {

        }

        vm.placeholder = DayViewConfig.PLACEHOLDER;
        vm.$onInit = init;
        vm.focusOut = focusOut;
        vm.focusIn = focusIn;
    }
});
