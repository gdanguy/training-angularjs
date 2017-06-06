(function () {
    'use strict';
    angular.module('app.dashboard.service.company', ['app.dashboard.model'])
        .factory('companyService', companyService);
    /* @ngInject */
    function companyService($http) {
        return {
            list: $http.get(`${env.api.URL}/companies`),
        }
    }
})();