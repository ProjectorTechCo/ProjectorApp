const path = require("path");

module.exports = {
    devtool: "source-map",
    context: path.join(__dirname, "/src"),
    entry: ["babel-polyfill", path.resolve(__dirname, "src", "index.js")],
    output: {
        path: path.resolve(__dirname, "src/views"),
        filename: "bundle.min.js",
        publicPath: "/",
    },
    devServer: {
        historyApiFallback: true,
        contentBase: [path.resolve(__dirname, "src"), path.resolve(__dirname, "src/views")],
        compress: true,
        hot: true,
        port: 9000,
        proxy: {
            "/": "http://localhost:8080"
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                include: [path.resolve(__dirname, "src")],
                loader: "babel-loader",
            },
            {
                test: /\.(s*)css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: "file-loader?name=images/[name].[ext]",
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader?name=fonts/[name].[ext]",
            },
        ],
    },
};
