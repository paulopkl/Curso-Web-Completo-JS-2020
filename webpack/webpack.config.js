const modoDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: modoDev ? 'development' : 'production', // modo 'production' e 'development'
    entry: './src/principal.js', // entrada
    output: {
        filename: 'principal.js',
        path: __dirname + '/public',
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ // 
            filename: "estilo.css",
        })
    ],
    module: {
        rules: [{
            // test: /\.css$/, // Lê arquivos .css
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader, // Adiciona dentro da DOM a tag <style></style>
                // 'style-loader', // Adiciona dentro da DOM a tag <style></style>
                'css-loader', // interpreta @import, url()
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}