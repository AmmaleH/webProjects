module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: "https://www.immoc.com",
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}