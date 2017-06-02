(function () {
    'use strict';

    angular.module('app.add')
        .component('cdbAdd', {
            templateUrl: 'src/app/add/addComputer.html',
            controller: AddController
        });
    /* @ngInject */
    function AddController(computerService, companyService) {
        // jshint validthis: true
        const vm = this;
        vm.$onInit = $onInit;

        function $onInit() {
            companyService.list.then((response) => {
                vm.companies = response.data;
            });
        }
    }
})();
