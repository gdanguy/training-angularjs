(function() {
    'use strict';
    angular
        .module('app.edit')
        .config(routesConfig);
    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('edit', {
                url: '/edit',
                component: 'cdbEdit'
            });
    }
})();
