const path = require('path');

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
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                exclude: /(node_modules)/,
                loader: require.resolve("ts-loader")
            }
        ]        
    }
}

module.exports = config;