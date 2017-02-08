require('../../common/common-config');
require('../../common/common-events');
require('../../common/common-storage');
require('../../../db/factories/balances-db.factory');
require('../../day-view/components/day-view.component');

var WeekViewModule = require('../week-view.module');
var angular = require('angular');

WeekViewModule.component('weekView', {
    bindings: {},
    templateUrl: './components/ui/week-view/partials/week-view.partial.html',
    controller: function WeekViewController($rootScope, $scope,
                                            BalancesDb,
                                            CommonEvents, CommonConfig, CommonStorage) {
        var vm = this,
            VIEWS = CommonConfig.VIEW_SELECTORS;

        function applyBalances(balances) {

        }

        function applySelectedPeriod() {
            if (vm.period.type === VIEWS.WEEK) {
                BalancesDb
                    .listForPeriod(vm.period.startDate, vm.period.endDate)
                    .then(applyBalances);
            }
        }

        vm.period = CommonStorage.period();
        vm.week = CommonConfig.getWeek(vm.period);

        $scope.$on('$destroy', $rootScope.$on(CommonEvents.VIEW.SELECTED, function() {
            vm.period = CommonStorage.period();
            applySelectedPeriod(vm.period);
        }));
    }
});

