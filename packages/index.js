/**
 * Created by zenghongtu on 26/10/2018.
 * Desc: index
 */
import 'vue2-animate/dist/vue2-animate.css';
import Button from './button/index';
import ButtonGroup from './button-group/index';
import ButtonList from './button-list/index';
import Box from './box/index';
import Content from './content/index';
import Delete from './delete/index';
import Icon from './icon/index';
import Image from './image/index';
import Notification from './notification/index';
import Progress from './progress/index';
import Col from './col/index';
import Row from './row/index';
import Breadcrumb from './breadcrumb/index';
import BreadcrumbItem from './breadcrumb-item/index';
import Alert from './alert/index';
import Modal from './modal/index';
import Tag from './tag/index';
import TagList from './tag-list/index';

const components = [
  Button,
  ButtonGroup,
  ButtonList,
  Box,
  Content,
  Delete,
  Icon,
  Image,
  Progress,
  Col,
  Row,
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Modal,
  Tag,
  TagList,
];


const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$notify = Notification;
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
  Delete,
  Icon,
  Image,
  Notification,
  Progress,
  Col,
  Row,
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Modal,
  Tag,
  TagList,
};

export default {
  version,
  install,
};
