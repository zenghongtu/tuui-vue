/**
 * Created by zenghongtu on 30/10/2018.
 * Desc: index
 */

import Image from './src/main.vue';

Image.install = function (Vue) {
  Vue.component(Image.name, Image);
};

export default Image;
