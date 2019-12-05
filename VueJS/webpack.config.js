const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: {
        'index': './wwwroot/src/apps/index.js',
        'about': './wwwroot/src/apps/about.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/wwwroot/dist/js/apps'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};