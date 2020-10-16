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
};
