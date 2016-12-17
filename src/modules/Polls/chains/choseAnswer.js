import { set, state, input } from 'cerebral/operators';

export default [
  set(state`polls.currentAnswer`, input`answer`)
];
