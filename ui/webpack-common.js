"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    target: "web",
    entry: ["./src/main.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[contenthash].js",
        publicPath: "/",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Describo Online",
            template: "./public/index.html",
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({ filename: "[contenthash].css" }),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "",
                        },
                    },
                    "css-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "",
                        },
                    },
                    "css-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.(svg|png|jp(e*)g|gif|mp4)?$/,
                type: "asset/resource",
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                type: "asset/resource",
	    },
	    {
		test: /\.(geo)json$/,
		loader: "json-loader",
            },
        ],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            src: path.resolve(__dirname, "src"),
            assets: path.resolve(__dirname, "src/assets"),
            components: path.resolve(__dirname, "src/components"),
        },
    },
};
