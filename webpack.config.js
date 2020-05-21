const path = require('path');
const webpack = require("webpack");

const config = {
    entry: './src/js/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true,
        contentBase: path.join(__dirname, 'src')
    },
    resolve: {
        alias: {
            __js: path.resolve(__dirname, './src/js/')
        },
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.SITE_URL": JSON.stringify("http://localhost:9000")
        })
    ],
    module: {
        rules: [
            /* {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: require.resolve("babel-loader"),
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, */
            { 
                test: /\.tsx?$/, 
                exclude: /(node_modules)/,
                loader: require.resolve("ts-loader")
            }
        ]        
    }
}

module.exports = config;