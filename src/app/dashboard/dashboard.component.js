(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbDashboard', {
            templateUrl: 'src/app/dashboard/dashboard.html',
            controller: DashboardController
        });
    /* @ngInject */
    function DashboardController(computerService, $log) {
        // jshint validthis: true
        const vm = this;
        vm.$onInit = $onInit;

        function $onInit() {
            computerService.list.then((response) => {
                vm.list = response.data;
            });
            computerService.page.then((response) => {
                vm.page = response.data;
                $log.debug(vm.page);
            });
        }

        vm.nextPage = () => {
            computerService.pageId(vm.page.currentPage + 1).then((response) => {
                vm.page = response.data;
            })
        };

        vm.previousPage = () => {
            if (vm.page.currentPage > 0) {
                computerService.pageId(vm.page.currentPage - 1).then((response) => {
                    vm.page = response.data;
                })
            }
        };

        vm.changePageSize = (size) => {
            computerService.pageSize(size).then((response) => {
                vm.page = response.data;
            })
        }
    }
})();
