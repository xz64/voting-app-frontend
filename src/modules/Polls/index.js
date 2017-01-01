import wentPoll from './chains/wentPoll.js';
import choseAnswer from './chains/choseAnswer.js';
import voted from './chains/voted.js';
import resetState from './chains/resetState.js';
import addedAnswer from './chains/addedAnswer.js';
import removedAnswer from './chains/removedAnswer.js';
import editedAnswer from './chains/editedAnswer.js';
import uploadedPoll from './chains/uploadedPoll.js';
import { form } from 'cerebral-forms';

export default {
  state: {
    currentPoll: {},
    currentAnswer: null,
    voteError: null,
    showVoteSuccess: false,
    myPolls: [],
    editingPoll: form({
      question: {
        value: '',
        isRequired: true,
        isValueRules: ['isValue'],
        requiredMessage: 'Question is required',
        validationRules: ['minLength: 2'],
        validationMessages: ['Must be at least 2 characters']
      },
      answers: {
        value: ['', ''],
        isRequired: true,
        requiredMessage: 'At least 2 answers are required, and an answer cannot'
         + ' be empty',
        validationRules: ['minLength:2'],
        validationMessages: ['Must have at least 2 answers.']
      },
    }),
    editingPollId: null,
    asyncError: null,
    submitting: false
  },
  signals: {
    wentPoll,
    choseAnswer,
    voted,
    resetState,
    addedAnswer,
    removedAnswer,
    editedAnswer,
    uploadedPoll
  }
};
