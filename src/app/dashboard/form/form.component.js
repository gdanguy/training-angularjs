(function () {
    'use strict';

    angular.module('app.dashboard.form')
        .component('cdbForm', {
            templateUrl: 'src/app/dashboard/form/form.html',
            controller: FormController
        });

    /* @ngInject */
    function FormController($log, $stateParams, $location, companyService, computerService, Computer) {
        // jshint validthis: true
        const vm = this;
        vm.$onInit = $onInit;

        vm.id = $stateParams.id;

        if (vm.id != undefined) { // if id undefined, add state, else edit state
            vm.computer = computerService.get(vm.id, (response) => {
                vm.computer = response.data;
                $log.debug(vm.computer);
            });
        }

        function $onInit() {
            companyService.list.then((response) => {
                vm.companies = response.data;
                $log.debug(vm.companies);
            });
        }

        vm.addComputer = computer => {
            computerService.add(new Computer(computer).toDTO()).then(response => {
                $log.info(response);
                $location.path('/dashboard');
            });
        };

        vm.editComputer = computer => {
            computerService.edit(new Computer(computer).toDTO()).then(response => {
                $log.info(response);
                $location.path('/dashboard');
            });
        };
    }
})();
