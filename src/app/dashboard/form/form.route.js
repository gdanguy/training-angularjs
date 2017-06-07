(function() {
    'use strict';
    angular.module('app.dashboard.form')
        .config(routesConfig);
    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('edit', {
                url: '/form/:id',
                component: 'cdbForm'
            })
            .state('add', {
                url: '/form',
                component: 'cdbForm'
            });
    }
})();
