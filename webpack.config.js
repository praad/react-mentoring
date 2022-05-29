// webpack.config.js
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.tsx', // our entry point, as mentioned earlier
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/, // matches .js, .ts, and .tsx files
                loader: 'babel-loader', // uses babel-loader for the specified file types (no ts-loader needed)
                exclude: /node_modules/, 
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            },
            {
                test: /\.scss$/i,
                exclude: /\.module\.scss$/i,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                        importLoaders: 1,
                        modules: {
                            mode: "icss",
                        },
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.module\.scss$/i,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                        importLoaders: 1,
                        modules: {
                            mode: "local",
                        },
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                 ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js', // our output bundle
    },
    devServer: {
        // contentBase
        static : {
          directory : path.join(__dirname, "public/")
        },
        port: 3000,
        // publicPath
        devMiddleware:{
           publicPath: "https://localhost:3000/dist/",
        },
        // hotOnly
        hot: "only",
      },
    plugins: [new webpack.HotModuleReplacementPlugin()], // used for hot reloading when developing
    devtool: 'eval-source-map', // builds high quality source maps
}