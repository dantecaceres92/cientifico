const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin") ;

module.exports = {
    entry: "./src/index.js" ,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    resolve: {
        extensions: [".js"],
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: "./public/index.html", //Aqui indico de donde va a leer
                filename: "./index.html",   //Aqui indico qué archivo se va a crear luego de ejecutar webpack
            }
        ),
        new CopyWebpackPlugin({
            patterns: [{from: "./src/styles/styles.css", to: ""}]
        })
    ]
}