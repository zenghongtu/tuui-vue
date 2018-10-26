/**
 * Created by zenghongtu on 26/10/2018.
 * Desc: index
 */
import Button from './button/index';

const components = [
  Button,
];


const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const version = '0.0.1';

export {
  install,
  version,
  Button,
};

export default {
  version,
  install,
};
