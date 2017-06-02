(function () {
    'use strict';
    angular.module('app.dashboard.service', [])
        .factory('computerService', computerService)
        .factory('companyService', companyService);

    function computerService($http) {
        return {
            list: $http.get(`${env.api.URL}/computers`),
            get: (id) => $http.get(`${env.api.URL}/computers/${id}`),
            page: $http.get(`${env.api.URL}/computers/page?page=0`),
            pageId: (id) => $http.get(`${env.api.URL}/computers/page?page=${id}`),
            pageSize: (size) => $http.get(`${env.api.URL}/computers/page?page=0&sizePages=${size}`)
        }
    }

    function companyService($http) {
        return {
            list: $http.get(`${env.api.URL}/companies`),
        }
    }
})();