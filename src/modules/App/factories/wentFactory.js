import { set, state } from 'cerebral/operators';
import loadedPage from '../chains/loadedPage.js';

export default function(route) {
  return [
    set(state`app.currentRoute`, route),
    ...loadedPage
  ];
}
