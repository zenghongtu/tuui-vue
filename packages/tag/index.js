/**
 * Created by zenghongtu on 21/11/2018.
 * Desc: index
 */

import TuTag from './src/tag.vue';

TuTag.install = function (Vue) {
  Vue.component(TuTag.name, TuTag);
};

export default TuTag;
