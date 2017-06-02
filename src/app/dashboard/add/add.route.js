(function() {
    'use strict';
    angular
        .module('app.add')
        .config(routesConfig);
    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('add', {
                url: '/add',
                component: 'cdbAdd'
            });
    }
})();
