/* config-overrides.js */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function override(config, env) {
    config.externals = {
        antd: 'antd',
        react: 'React',
        'react-dom': 'ReactDOM',
    };

    config.output.filename = 'bundle.js';

    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        })
    );

    return config;
};
