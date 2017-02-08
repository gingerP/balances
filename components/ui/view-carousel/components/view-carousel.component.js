require('../../common/common-config');

var ViewCarouselModule = require('../view-carousel.module');
var angular = require('angular');

ViewCarouselModule.component('weekView', {
    bindings: {},
    transclude: true,
    templateUrl: './components/ui/view-carousel/partials/view-carousel.partial.html',
    controller: function ViewCarouselController(CommonConfig) {
        var vm = this;

        vm.week = CommonConfig.getWeek();

    }
});

