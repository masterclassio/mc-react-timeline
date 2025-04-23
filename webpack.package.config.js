const path = require('path');

module.exports = {
    mode: 'development',
    target: 'web',
    /**
     * Our application entry point.
     */
    entry: './src/index.tsx',

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
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        /**
         * @see  https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
         */
        clean: true,
    },
    externals: { react: true },
};
