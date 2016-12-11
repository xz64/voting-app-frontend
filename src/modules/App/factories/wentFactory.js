import { set, state } from 'cerebral/operators';

export default route => set(state`app.currentRoute`, route);
