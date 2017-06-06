(function() {
    'use strict';
    angular.module('app.dashboard', [
        'app.dashboard.service.computer',
        'app.dashboard.service.company',
        'app.dashboard.header',
        'app.dashboard.pagination',
        'app.dashboard.model'
    ]);

})();
