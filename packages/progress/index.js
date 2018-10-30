/**
 * Created by zenghongtu on 30/10/2018.
 * Desc: index
 */

import Progress from './src/main.vue';

Progress.install = function (Vue) {
  Vue.component(Progress.name, Progress);
};

export default Progress;
