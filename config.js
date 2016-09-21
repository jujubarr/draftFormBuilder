'use strict';

exports.config = {
    /* seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
     ** enables to connect to the browsers directly.
     ** http://stackoverflow.com/questions/27889488/cannot-run-protractor-on-internet-explorer-11
     */
    // framework: 'jasmine2',
    directConnect: true,
    multiCapabilities: [{
            'browserName': 'chrome'
        }
    ],
    specs: ['index.js'],

    chromeDriver:'./node_modules/chromedriver/bin/chromedriver'
}
