const webpack = require('webpack');
const version = require('./package.json').version;

module.exports = function override(config, env) {

  config.plugins.push(
    new webpack.DefinePlugin({
        'process.env.REACT_APP_VERSION': JSON.stringify(version)
    })
  );

  return config;
};
