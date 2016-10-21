import wentHome from './chains/wentHome';
import wentAbout from './chains/wentAbout';

export default module => {
  module.addState({
    currentRoute: 'home'
  });

  module.addSignals({
    wentHome,
    wentAbout
  });
};
