require('../../common/common-events');
var SideBarModule = require('../side-bar.module');
var angular = require('angular');

SideBarModule.component('sideBar', {
    bindings: {},
    templateUrl: './components/ui/side-bar/partials/side-bar.partial.html',
    controller: function($rootScope, $scope, CommonEvents) {
        var vm = this;

        vm.isOpened = false;

        function onOpened(event, isOpened) {
            vm.isOpened = isOpened
        }

        $scope.$on('$destroy', $rootScope.$on(CommonEvents.MENU.OPENED, onOpened))
    }
});
