/**
 * Created by zenghongtu on 31/10/2018.
 * Desc: index
 */

import TuBreadcrumb from './src/breadcrumb.vue';

TuBreadcrumb.install = function (Vue) {
  Vue.component(TuBreadcrumb.name, TuBreadcrumb);
};

export default TuBreadcrumb;

