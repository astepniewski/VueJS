const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: {
        'js/apps/index': './wwwroot/src/apps/index.js',
        'js/apps/about': './wwwroot/src/apps/about.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/wwwroot/dist',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[ext]',
                    outputPath: 'assets'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};