const path = require('path');
const md = require('markdown-it')();

const striptags = require('./build/strip-tags');

const MarkdownItContainer = require('markdown-it-container');

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, $0 => String.fromCharCode(parseInt(encodeURIComponent($0)
    .replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16)));
  return str;
}

function wrap(render) {
  return function () {
    return render.apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
}

const mdOptions = {
  use: [
    [require('markdown-it-anchor'), {
      level: 2,
      // slugify,
      permalink: true,
      permalinkBefore: true,
    }],
    [require('markdown-it-container'), 'demo', {
      validate(params) {
        return params.trim()
          .match(/^demo\s*(.*)$/);
      },

      render(tokens, idx) {
        const m = tokens[idx].info.trim()
          .match(/^demo\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
          const description = (m && m.length > 1) ? m[1] : '';
          const content = tokens[idx + 1].content;
          const html = convert(striptags.strip(content, ['script', 'style']))
            .replace(/(<[^>]*)=""(?=.*>)/g, '$1');
          const script = striptags.fetch(content, 'script');
          const style = striptags.fetch(content, 'style');
          let jsfiddle = {
            html,
            script,
            style,
          };
          const descriptionHTML = description
            ? md.render(description)
            : '';

          jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));

          return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                            <div class="source" slot="source">${html}</div>
                            ${descriptionHTML}
                            <div class="highlight" slot="highlight">`;
        }
        return '</div></demo-block>\n';
      },
    }],
    [require('markdown-it-container'), 'tip'],
    [require('markdown-it-container'), 'warning'],
  ],
  preprocess(MarkdownIt, source) {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">';
    };
    MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
    return source;
  },
  raw: true,
};


module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config
      .entry('app')
      .clear();
    config
      .entry('app')
      .add('./examples/main.js')
      .end();
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options(mdOptions);
    config.resolve.alias
      .set('@', path.join(__dirname, 'examples'));
  },
};
