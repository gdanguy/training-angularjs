(function () {
    'use strict';

    angular.module('app.dashboard.model', [])
        .factory('Company', Company)
        .factory('Computer', Computer);

    function Computer (Company) {
        function Computer(id, name, introduced, discontinued, company) {
            this.id = id;
            this.name = name;
            this.introduced = introduced == null ? null : new Date(introduced);
            this.discontinued = discontinued == null ? null : new Date(discontinued);
            this.company = company;
        }

        function toDTO() {
            let computer = {};
            computer.name = this.name;
            if (this.introduced != null) {
                computer.introduced = this.introduced.toISOString().split('T')[0];
            }
            if (this.discontinued != null) {
                computer.discontinued = this.discontinued.toISOString().split('T')[0];
            }
            if (this.company) {
                computer.companyId = this.company.id;
            }
            return computer;
        }

        Computer.build = function (data) {
            return new Computer(
                data.id,
                data.name,
                data.introduced,
                data.discontinued,
                data.company === null ? null : Company.build(data.company)
                );
        };


        Computer.mapper = function (data) {
            return Computer.build(data);
        };

        return Computer;
    }
    Computer.$inject = ['Company'];
    function Company() {

        function Company(id, name) {
            this.id = id;
            this.name = name;
        }

        Company.build = function (data) {
            return new Company(
                data.id,
                data.name
            );
        };

        return Company;
    }
})();