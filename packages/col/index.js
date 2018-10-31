/**
 * Created by zenghongtu on 31/10/2018.
 * Desc: index
 */

import Col from './src/col';

Col.install = function (Vue) {
  Vue.component(Col.name, Col);
};

export default Col;

