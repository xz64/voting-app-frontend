import wentHome from './chains/wentHome';
import wentAbout from './chains/wentAbout';
import wentRegister from './chains/wentRegister';
import wentLogin from './chains/wentLogin';
import wentLogout from './chains/wentLogout';

export default {
  state: {
    currentRoute: 'home',
    user: {
      id: null
    },
    polls: []
  },
  signals: {
    wentHome,
    wentAbout,
    wentRegister,
    wentLogin,
    wentLogout
  }
};
