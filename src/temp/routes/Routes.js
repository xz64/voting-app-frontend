const routes = {
  '/': {
    title: 'Home'
  },
  '/login': {
    title: 'Login'
  },
  '/about': {
    title: 'About'
  },
  '/register': {
    title: 'Register'
  }

};

const routeConfig = {
  routes,
  pathname: window.location.pathname
};

export default routeConfig;
