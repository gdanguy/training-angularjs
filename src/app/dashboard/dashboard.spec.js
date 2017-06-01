/* eslint strict: [2, "global"] */
'use strict';

describe('dashboard component', () => {

    beforeEach(module('app', $provide => {
        $provide.factory('dashboard', () => {
            return {
                templateUrl: 'app/dashboard/dashboard.html'
            };
        });
    }));
});
