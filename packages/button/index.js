/**
 * Created by zenghongtu on 26/10/2018.
 * Desc: index
 */

import TuButton from './src/button.vue';

TuButton.install = function (Vue) {
  Vue.component(TuButton.name, TuButton);
};

export default TuButton;
