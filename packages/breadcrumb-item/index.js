/**
 * Created by zenghongtu on 31/10/2018.
 * Desc: index
 */

import TuBreadcrumbItem from '../breadcrumb/src/breadcrumb-item.vue';

TuBreadcrumbItem.install = function (Vue) {
  Vue.component(TuBreadcrumbItem.name, TuBreadcrumbItem);
};

export default TuBreadcrumbItem;

