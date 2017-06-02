(function() {
    'use strict';
    angular.module('app.dashboard.pagination', ['app.dashboard.service.computer'])
        .component('cdbPagination', {
            templateUrl: 'src/app/dashboard/pagination/pagination.html',
            controller: PaginationController,
            bindings: {
                page: '='
            }
    });
    /* @ngInject */
    function PaginationController(computerService, $log) {
        // jshint validthis: true
        const vm = this;

        vm.nextPage = () => {
            computerService.pageId(vm.page.currentPage + 1).then((response) => {
                vm.page = response.data;
                $log.debug(vm.page);
            })
        };

        vm.previousPage = () => {
            if (vm.page.currentPage > 0) {
                computerService.pageId(vm.page.currentPage - 1).then((response) => {
                    vm.page = response.data;
                    $log.debug(vm.page);
                })
            }
        };

        vm.changePageSize = (size) => {
            computerService.pageSize(size).then((response) => {
                vm.page = response.data;
                $log.debug(vm.page);
            })
        }
    }
})();