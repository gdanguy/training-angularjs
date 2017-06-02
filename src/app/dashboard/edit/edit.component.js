(function () {
    'use strict';

    angular.module('app.edit')
        .component('cdbEdit', {
            templateUrl: 'src/app/edit/edit.html',
            controller: EditController
        });
    /* @ngInject */
    function EditController(computerService, $log) {
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
