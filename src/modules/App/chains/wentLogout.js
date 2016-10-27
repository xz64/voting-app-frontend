import { unset } from 'cerebral/operators';
import redirect from 'cerebral-module-router/redirect';

import logout from '../actions/logout';

export default [
  logout, {
    success: [
      unset('state:app.user.id'),
      redirect('/')
    ],
    error: []
  }
];
