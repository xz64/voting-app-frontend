import wentHome from './chains/wentHome';
import wentAbout from './chains/wentAbout';
import wentRegister from './chains/wentRegister';

export default module => {
  module.addState({
    currentRoute: 'home'
  });

  module.addSignals({
    wentHome,
    wentAbout,
    wentRegister
  });
};
