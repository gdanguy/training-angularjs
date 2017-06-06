(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbAdd', {
            templateUrl: 'src/app/dashboard/add/addComputer.html',
            controller: AddController
        });
    /* @ngInject */
    function AddController($log, companyService) {
        // jshint validthis: true
        const vm = this;
        vm.$onInit = $onInit;

        function $onInit() {
            companyService.list.then((response) => {
                vm.companies = response.data;
                $log.debug(vm.companies);
            });
        }
    }
})();
