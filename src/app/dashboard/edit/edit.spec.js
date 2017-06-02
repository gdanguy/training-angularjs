/* eslint strict: [2, "global"] */
'use strict';

describe('edit component', () => {

    beforeEach(module('app', $provide => {
        $provide.factory('edit', () => {
            return {
                templateUrl: 'app/edit/edit.html'
            };
        });
    }));
});
