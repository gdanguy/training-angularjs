(function () {
    'use strict';
    angular.module('app.dashboard.service.computer', ['app.dashboard.model'])
        .factory('computerService', computerService);
    /* @ngInject */
    function computerService($http, Computer) {
        return {
            list: $http.get(`${env.api.URL}/computers`),
            get: (id) => new Computer($http.get(`${env.api.URL}/computers/${id}`)),
            page: $http.get(`${env.api.URL}/computers/page?page=0`),
            pageId: (id) => $http.get(`${env.api.URL}/computers/page?page=${id}`),
            pageSize: (size) => $http.get(`${env.api.URL}/computers/page?page=0&sizePages=${size}`),
            add: (computer) => $http.post(`${env.api.URL}/computers`).data(computer),
            edit: (computer) => $http.put(`${env.api.URL}/computers`).data(computer),
            delete: (id) => $http.delete(`${env.api.URL}/computers`).data(id)
        }
    }
})();