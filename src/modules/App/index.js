import wentHome from './chains/wentHome';
import wentAbout from './chains/wentAbout';
import wentRegister from './chains/wentRegister';
import wentLogin from './chains/wentLogin';
import wentLogout from './chains/wentLogout';

export default module => {
  module.addState({
    currentRoute: 'home',
    user: {
      id: null
    }
  });

  module.addSignals({
    wentHome,
    wentAbout,
    wentRegister,
    wentLogin,
    wentLogout
  });
};
