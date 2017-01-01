import React, { Component } from 'react';
import { translate } from 'react-i18next';

class TranslatableAnswerItem extends Component {
  constructor(props) {
    super(props);
    this._onRemove = this._onRemove.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  _onRemove() {
    this.props.onRemove({ index: this.props.index });
  }

  _onChange(event) {
    this.props.onChange({
      index: this.props.index,
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input value={this.props.answer} className='c-field' type='text'
          onChange={this._onChange}/>
        {(this.props.index > 1) &&
            <button onClick={this._onRemove} className='c-button'>
              {this.props.t('REMOVE')}
            </button>}
      </div>
    );
  }
}

TranslatableAnswerItem.propTypes = {
  onRemove: React.PropTypes.func,
  onChange: React.PropTypes.func,
  t: React.PropTypes.func,
  index: React.PropTypes.number,
  answer: React.PropTypes.string
};

const AnswerItem = translate()(TranslatableAnswerItem);

function AnswerEditor({ t, answers, onRemove, onAdd, onChange }) {
  return (
    <div>
      {answers.map((answer, i) =>
        <AnswerItem
          onRemove={onRemove} answer={answer} key={i} index={i}
          onChange={onChange}
        />
      )}
      <button className='c-button' onClick={() => onAdd()}>{t('ADD')}</button>
    </div>
  );
}

AnswerEditor.propTypes = {
  onRemove: React.PropTypes.func,
  onChange: React.PropTypes.func,
  onAdd: React.PropTypes.func,
  t: React.PropTypes.func,
  answers: React.PropTypes.array
};

export default translate()(AnswerEditor);
