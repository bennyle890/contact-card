const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {InjectManifest} = require('workbox-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'Webpack Plugin',
        }),
        new InjectManifest({
            swSrc: './src/sw.js',
            swDest: 'service-worker.js',
        }),
        // new WorkboxPlugin.GenerateSW({
        //     // Do note precache images
        //     exclude: [/\.(?:png|jpg|jpeg|svg)$/],

        //     // Define runtime chaching rules.
        //     runtimeCaching: [{
        //         // Match any request that ends with .png, .jpg, .jpeg or .svg.
        //         urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

        //         // Apply a cache-first strategy.
        //         handler: 'CacheFirst',

        //         options: {
        //             // Use a custom cache name.
        //             cacheName: 'images',

        //             // Only cache 1 images
        //             expiration: {
        //                 maxEntries: 1,
        //             },
        //         },
        //     }],
        // })
    ]
};