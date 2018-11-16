/**
 * Created by zenghongtu on 12/11/2018.
 * Desc: index
 */

import Modal from './src/main.vue';

Modal.install = function (Vue) {
  Vue.component(Modal.name, Modal);
};

export default Modal;
