/**
 * Created by zenghongtu on 29/10/2018.
 * Desc: index
 */

import Box from './src/main.vue';

/* istanbul ignore next */
Box.install = function (Vue) {
  Vue.component(Box.name, Box);
};

export default Box;
