require('../../week-view/components/week-view.component');
require('../../side-bar/components/side-bar.component');
require('../../view-selector/components/view-selector.component');
require('../../tabbar/components/tabbar.component');
require('../../common/common-events');
require('../../common/common-config');
require('../../common/common-storage');

var BalanceModule = require('../balance.module');
var angular = require('angular');

BalanceModule.component('balance', {
    bindings: {},
    templateUrl: './components/ui/balance/partials/balance.partial.html',
    controller: function($rootScope,
                         CommonEvents, CommonConfig, CommonStorage) {
        var vm = this;

        function onViewChanged(event, selectedView) {
            vm.selectedView = selectedView;
        }

        vm.selectedView = CommonStorage.period().type;
        vm.VIEWS = CommonConfig.VIEW_SELECTORS;
        $rootScope.$on(CommonEvents.VIEW.SELECTED, onViewChanged);
    }
});
