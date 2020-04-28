const CompressionPlugin = require('compression-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    runtimeCompiler: true,
    chainWebpack(config) {
        config.plugins.delete('prefetch');
        config.plugin('CompressionPlugin').use(CompressionPlugin);
        new HtmlWebpackPlugin();
        new PreloadWebpackPlugin(({
            rel: 'preload',
            include: 'all' // or 'initial'
        }))
    },
    configureWebpack: {
        // It will be merged into the final Webpack config

        plugins: [

        ]
    }

};


