require('../../common/common-config');
require('../../day-view/components/day-view.component');

var WeekViewModule = require('../week-view.module');
var angular = require('angular');

WeekViewModule.component('weekView', {
    bindings: {},
    templateUrl: './components/ui/week-view/partials/week-view.partial.html',
    controller: function WeekViewController(CommonConfig) {
        var vm = this;

        vm.week = CommonConfig.getWeek();

    }
});

