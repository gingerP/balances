'use strict';
require('../../common/common-events');

var TabbarModule = require('../tabbar.module');

TabbarModule.component('tabbar', {
    bindings: {
        day: '='
    },
    transclude: true,
    templateUrl: './components/ui/tabbar/partials/tabbar.partial.html',
    controller: function($rootScope, CommonEvents) {
        var vm = this;

        function open() {
            vm.isOpened = !vm.isOpened;
            $rootScope.$emit(CommonEvents.MENU.OPENED, vm.isOpened);
        }

        vm.open = open;
        vm.isOpened = false;
    }
});
