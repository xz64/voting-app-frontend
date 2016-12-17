import wentHome from './chains/wentHome';
import wentAbout from './chains/wentAbout';
import wentRegister from './chains/wentRegister';
import wentLogin from './chains/wentLogin';
import wentLogout from './chains/wentLogout';
import wentPoll from './chains/wentPoll';

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
    wentLogout,
    wentPoll
  }
};
