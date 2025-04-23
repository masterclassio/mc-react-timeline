const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

/**
 * Instantiate the plugin.
 * The `template` property defines the source
 * of a template file that this plugin will use.
 * We will create it later.
 */
const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
});

module.exports = {
    mode: 'development',
    target: 'web',
    /**
     * Our application entry point.
     */
    entry: './src/story.tsx',

    /**
     * These rules define how to deal 
     * with files with given extensions.
     * For example, .tsx files 
     * will be compiled with ts-loader,
     * a spcific loader for webpack
     * that knows how to work with TypeScript files.
     */
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    /**
     * Telling webpack which extensions
     * we are interested in.
     */
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    /**
     * What file name should be used for the result file,
     * and where it should be palced.
     */
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        /**
         * @see  https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
         */
        clean: true,
    },
    /**
     * Use the html plugin.
     */
    plugins: [htmlPlugin],

    // devServer: {
    //     static: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 9000
    // },
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 9000,            // pick any free port
        open: true,            // auto‑opens browser
        hot: true,             // hot‑module replacement
        compress: true,
        historyApiFallback: true,
        client: {
            overlay: true,       // surface compile errors in the browser
            logging: 'info',
        },
    },
};
