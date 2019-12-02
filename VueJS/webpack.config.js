const path = require('path');

module.exports = {
    entry: {
        'js/index/app': './wwwroot/src/js/index/app.js',
        'js/about/app': './wwwroot/src/js/about/app.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/wwwroot/dist'
    }
};