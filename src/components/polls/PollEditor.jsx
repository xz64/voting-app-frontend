import React from 'react';
import { connect } from 'cerebral/react';
import { translate } from 'react-i18next';

import InputText from '../forms/InputText.jsx';
import { generateAnswerErrorMessage } from '../forms/helpers.js';
import AnswerEditor from './AnswerEditor.jsx';

function generateHandler(fieldChanged, field) {
  return event => fieldChanged({
    field,
    value: event.target.value,
    touched: true
  });
}

function wrapSubmit(onSubmit) {
  return () => { onSubmit(); };
}

function customValidate(form) {
  if (!form.question.value || form.question.value.length < 2) {
    return false;
  }
  if (form.answers.value.indexOf('') > -1 || form.answers.value.length < 2) {
    return false;
  }
  return true;
}

const stateProps = {
  form: 'polls.editingPoll',
  asyncError: 'polls.asyncError',
  submitting: 'polls.submitting',
  answers: 'polls.editingPoll.answers.value',
  pollId: 'polls.editingPollId'
};

const signalProps = {
  fieldChanged: 'fieldChanged',
  addedAnswer: 'polls.addedAnswer',
  removedAnswer: 'polls.removedAnswer',
  onAnswerEdit: 'polls.editedAnswer',
  onSubmit: 'polls.uploadedPoll'
};

const PollEditor = ({ onSubmit, answers, addedAnswer, removedAnswer,
  onAnswerEdit, submitting, fieldChanged, form, asyncError, pollId, t }) => (
  <div>
    <InputText
      label={t('QUESTION')}
      onChange={generateHandler(fieldChanged, 'polls.editingPoll.question')}
      field={form.question}
      useValue={true}
    />
    <label>{t('ANSWERS')}</label>
    {generateAnswerErrorMessage(form.answers)}
    <AnswerEditor answers={answers} onAdd={addedAnswer} onRemove={removedAnswer}
      onChange={onAnswerEdit}/>
    {asyncError && <div className='c-field--error'>{asyncError}</div>}
    <button
      style={{'marginTop': '10px'}}
      className='c-button c-button--block'
      type='button'
      disabled={submitting || !customValidate(form)}
      onClick={wrapSubmit(onSubmit)}
    >
      {pollId ? t('UPDATE_POLL') : t('CREATE_POLL')}
    </button>
  </div>
);

PollEditor.propTypes = {
  form: React.PropTypes.object,
  fieldChanged: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
  addedAnswer: React.PropTypes.func,
  removedAnswer: React.PropTypes.func,
  onAnswerEdit: React.PropTypes.func,
  asyncError: React.PropTypes.string,
  submitting: React.PropTypes.bool,
  t: React.PropTypes.func,
  answers: React.PropTypes.array,
  pollId: React.PropTypes.string
};

export default connect(stateProps, signalProps, translate()(PollEditor));
