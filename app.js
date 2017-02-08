delete window.define;

require('./components/ui/ui.module');
require('./components/db/factories/common-db.factory');

var angular = require('angular');

angular.module('app', [
    'db.module',
    'ui.module'
]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
});
