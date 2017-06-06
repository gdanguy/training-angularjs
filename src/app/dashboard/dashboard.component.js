(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbDashboard', {
            templateUrl: 'src/app/dashboard/dashboard.html',
            controller: DashboardController,
            styleUrls: ['dashboard.scss']
        });
    /* @ngInject */
    function DashboardController(computerService, $log, Computer) {
        // jshint validthis: true
        const vm = this;
        vm.$onInit = $onInit;

        function $onInit() {
            $log.debug('DashboardController init');
            computerService.list.then((response) => {
                vm.list = response.data;
                vm.list = listMapper(vm.list);
                $log.debug(vm.list);
            });
            computerService.page.then((response) => {
                vm.page = response.data;
                vm.page = pageMapper(vm.page);
                $log.debug(vm.page);
            });

        }

        function listMapper(listIn) {
            var list=[];
            for(var i= 0; i < listIn.length; i++){
                list.push(Computer.mapper(listIn[i]));
            }
            listIn = list;
            return listIn;
        }

        function pageMapper(page) {
            var list=[];
            for(var i= 0; i < page.listPage.length; i++){
                list.push(Computer.mapper(page.listPage[i]));
            }
            page.listPage = list;
            return page;
        }
    }
})();
