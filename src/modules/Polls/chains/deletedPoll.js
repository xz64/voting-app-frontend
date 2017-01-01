import deletePoll from '../actions/deletePoll.js';
import setMyPolls from '../actions/setMyPolls.js';
import getMyPolls from '../../Polls/actions/getMyPolls.js';

export default [
  deletePoll, {
    success: [
      getMyPolls, {
        success: [
          setMyPolls
        ],
        error: []
      }
    ],
    error: []
  }
];
