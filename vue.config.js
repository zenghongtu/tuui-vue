const path = require('path');

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config
      .entry('app')
      .clear();
    config
      .entry('app')
      .add('./examples/main.js')
      .end()
      .module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
      })
      .end();
    config.resolve.alias
      .set('@', path.join(__dirname, 'examples'));
  },
};
