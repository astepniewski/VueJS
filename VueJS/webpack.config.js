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
            },
            {
                test: /\.js$/,
                // Exclude transpiling `node_modules`, except `bootstrap-vue/src`
                exclude: /node_modules\/(?!bootstrap-vue\/src\/)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            'bootstrap-vue$': 'bootstrap-vue/src/index.js'
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};