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
                vm.page = response.data;
            });
        }
    }
})();
