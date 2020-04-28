const CompressionPlugin = require('compression-webpack-plugin');
//const PreloadWebpackPlugin = require('preload-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    runtimeCompiler: true,
    chainWebpack(config) {
        config.plugins.delete('prefetch');
        config.plugin('CompressionPlugin').use(CompressionPlugin);
        /*new PreloadWebpackPlugin(({
            rel: 'preload',
            include: 'all' // or 'initial'
        }))*/
    },

};


