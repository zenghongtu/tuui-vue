/**
 * Created by zenghongtu on 29/10/2018.
 * Desc: index
 */

import Content from './src/main.vue';

/* istanbul ignore next */
Content.install = function (Vue) {
  Vue.component(Content.name, Content);
};

export default Content;
