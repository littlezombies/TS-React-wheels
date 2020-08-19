const path = require('path')
module.exports = {
    entry: {
        index: './lib/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'tsWheels',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },
        ],
    },
}