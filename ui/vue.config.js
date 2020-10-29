module.exports = {
    devServer: {
        port: 9000,
        writeToDisk: true,
        proxy: {
            "^/api": {
                target: "http://api:8080",
                ws: true,
                changeOrigin: true,
                pathRewrite: { "^/api": "" },
            },
        },
    },
    configureWebpack: (config) => {
        config.module.rules.push({
            test: /\.worker\.js$/,
            use: [
                {
                    loader: "worker-loader",
                    options: {
                        inline: "fallback",
                    },
                },
                {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            ],
        });
    },
};
