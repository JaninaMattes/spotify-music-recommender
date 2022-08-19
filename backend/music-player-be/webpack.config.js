/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    infrastructureLogging: { level: 'log' },
    mode: process.env.STAGE === 'dev' ? 'development' : 'production',
    optimization: {
        minimize: false, // minimization breaks typeorm.
    },
    entry: './src/main.ts',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            '@libs/spotify': path.resolve(__dirname, './src/libs/spotify/index.ts'),
            '@libs/aws': path.resolve(__dirname, './src/libs/types/index.ts'),
        }
    },
    externals: [nodeExternals()],
    externalsPresets: {
        node: true,
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
    },
    target: 'node',
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: [
                    [
                        /node_modules/,
                        path.resolve(__dirname, '.webpack'),
                    ],
                ],
                options: {
                    transpileOnly: true,
                },
            },
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({ formatter: 'basic' }),
        new webpack.IgnorePlugin({
            checkResource: (resource) => {
                const lazyImports = [
                    '@nestjs/platform-fastify',
                    'cache-manager',
                    'class-validator',
                    'class-transformer',
                    'point-of-view',
                    'fastify-static',
                ];
                if (!lazyImports.includes(resource)) {
                    return false;
                }
                try {
                    require.resolve(resource);
                } catch (err) {
                    return true;
                }
                return false;
            },
        }),
    ],
};
