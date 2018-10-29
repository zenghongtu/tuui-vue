import config from './nav.config.json';

const loadDocs = function (dirname, name) {
  return () => import(`./docs/${dirname}/${name}.md`);
};

const load = function (path) {
  return () => import(`./views/${path}.vue`);
};

const registerRoute = (navConfig) => {
  const routes = [];
  const navs = navConfig.documentation;

  function addRoute(nav, page) {
    const component = loadDocs(nav.name, page.name);
    const route = {
      path: page.path,
      meta: {
        title: page.name,
        description: page.description,
      },
      name: page.name,
      component,
    };

    routes.push(route);
  }

  navs.forEach((nav) => {
    if (nav.groups) {
      nav.groups.forEach((group) => {
        addRoute(nav, group);
      });
    }
  });
  return routes;
};

const routes = registerRoute(config);

const generateMiscRoutes = function () {
  const aboutRoute = {
    path: '/about',
    name: 'about',
    component: load('About'),
  };
  const indexRoute = {
    path: '/home',
    name: 'home',
    component: load('Home'),
  };

  return [aboutRoute, indexRoute];
};

const defaultPath = {
  path: '/',
  redirect: 'home',
};


export default routes.concat(generateMiscRoutes(), defaultPath);
