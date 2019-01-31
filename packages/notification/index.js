/**
 * Created by zenghongtu on 29/10/2018.
 * Desc: index
 */

import Notification from './src/main.vue';

/* istanbul ignore next */
Notification.install = function (Vue) {
  Vue.component(Notification.name, Notification);
};

export default Notification;
