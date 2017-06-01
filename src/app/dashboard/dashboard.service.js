(function () {
    'use strict';
    angular.module('app.dashboard.service', [])
        .factory('computerService', computerService)
        .factory('companyService', companyService);

    function computerService($http) {
        return {
            list: $http.get(`${env.api.URL}/computers`),
            get: (id) => $http.get(`${env.api.URL}/computers/${id}`)
        }
    }

    function companyService($http) {
        return {
            list: $http.get(`${env.api.URL}/companies`),
        }
    }
})();