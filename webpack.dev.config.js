/**
 * webpack.dev.config.js
 * 🍄 dev‑only webpack config with HMR + watch
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /** @step 🌴 Dev mode enables useful defaults (no minify, named chunks, etc.) */
    mode: 'development',

    /** @step 🌳 Fast source maps that rebuild quickly */
    devtool: 'eval-source-map',

    /** @step 🌺 App entry point (feel free to switch to ./src/index.tsx) */
    entry: './src/story.tsx',

    /** @step 🐢 Tell webpack how to deal with .ts/.tsx/.css files */
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    /** @step 🐬 Output goes to memory when served, to disk when run via `webpack` */
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',       // required for SPA routing
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],

    /** @step 🚀 Dev‑server with HMR & live‑reload */
    devServer: {
        static: { directory: path.join(__dirname, 'dist') },
        port: 9173,            // pick any free port
        open: true,            // auto‑opens browser
        hot: true,             // hot‑module replacement
        compress: true,
        historyApiFallback: true,
        client: {
            overlay: true,       // surface compile errors in the browser
            logging: 'info',
        },
    },

    /** @step 🐇 Re‑compile on file change in case you run webpack directly */
    /*
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000,
    },
    */
};
