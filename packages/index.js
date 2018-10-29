/**
 * Created by zenghongtu on 26/10/2018.
 * Desc: index
 */
import Button from './button/index';
import ButtonGroup from './button-group/index';
import ButtonList from './button-list/index';
import Box from './box/index';
import Content from './content/index';

const components = [
  Button,
  ButtonGroup,
  ButtonList,
  Box,
  Content,
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
  ButtonGroup,
  ButtonList,
  Box,
  Content,
};

export default {
  version,
  install,
};
