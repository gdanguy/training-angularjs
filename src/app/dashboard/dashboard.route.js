(function() {
    'use strict';
    angular.module('app.dashboard')
        .config(routesConfig);
    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                component: 'cdbDashboard'
            })
            .state('add', {
                url: '/add',
                component: 'cdbAdd'
            })
            .state('edit', {
                url: '/edit',
                component: 'cdbEdit'
            });
    }
})();
