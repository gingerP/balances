require('../../common/common-config');
require('../../common/common-storage');
require('../../common/common-events');
require('../../common/common-view-selection');
require('../../day-view/components/day-view.component');

var ViewSelectorModule = require('../view-selector.module');

ViewSelectorModule.component('viewSelector', {
    bindings: {},
    templateUrl: './components/ui/view-selector/partials/view-selector.partial.html',
    controller: function WeekViewController($rootScope, $scope,
                                            CommonViewSelection, CommonConfig, CommonEvents, CommonStorage) {
        var vm = this;

        function select(type) {
            var period;
            if (vm.selectedView !== type) {
                period = CommonViewSelection.selectView(type);
                vm.selectedView = period.type;
            }
        }

        vm.VIEW = CommonConfig.VIEW_SELECTORS;
        vm.selectedView = CommonConfig.DEFAULT_VIEW;
        vm.select = select;
    }
});

