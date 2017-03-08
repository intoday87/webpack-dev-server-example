var Express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

var app = new Express();
var compiler = webpack(webpackConfig);
var config = {
    noInfo: true,
    quiet: false,
    hot: true,
    inline: true,
    lazy: false,
    stats: { colors: true },
    headers: { 'Access-Control-Allow-Origin': '*' },
    publicPath: webpackConfig.output.publicPath
};

var webpackMiddleware = require("webpack-dev-middleware");
app.use(webpackMiddleware(compiler, config));

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('server listening at http://%s:%s', host, port);
});
