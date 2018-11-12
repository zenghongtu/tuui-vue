/**
 * Created by zenghongtu on 12/11/2018.
 * Desc: index
 */

import Alert from './src/main.vue';

Alert.install = function (Vue) {
  Vue.component(Alert.name, Alert);
};

export default Alert;
