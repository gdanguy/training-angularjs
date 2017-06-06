(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbEdit', {
            templateUrl: 'src/app/dashboard/edit/editComputer.html',
            controller: EditController
        });
    /* @ngInject */
    function EditController(companyService, computerService, $log) {
        // jshint validthis: true
        const vm = this;
        vm.$onInit = $onInit;

        function $onInit() {
            companyService.list.then((response) => {
                vm.companies = response.data;
                $log.debug(vm.companies);
            });

            computerService.get($stateParams.id).then((response) => {
                vm.computer = response.data;
                $log.debug(vm.computer)
            });
        }
    }
})();
