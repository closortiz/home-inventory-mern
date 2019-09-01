const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/prod/trial/lookup', { target: 'https://api.upcitemdb.com', changeOrigin: true }));
}