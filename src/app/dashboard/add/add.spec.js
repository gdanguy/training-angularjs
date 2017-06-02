/* eslint strict: [2, "global"] */
'use strict';

describe('add component', () => {

    beforeEach(module('app', $provide => {
        $provide.factory('add', () => {
            return {
                templateUrl: 'app/add/add.html'
            };
        });
    }));
});
