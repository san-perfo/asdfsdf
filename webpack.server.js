const path = require('path');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/server.ts',
    output: {
        path: distPath,
        filename: 'server.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                exclude: [/node_modules/],
                options: {
                    failOnHint: true,
                    typeCheck: true
                }
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: [/node_modules/]
            }
        ]
    },
    devtool: 'sourcemap',
    target: 'node'
}