import { connect } from 'react-redux';

import Button from './Button.jsx';

const mapStateToProps = (state) => {
  return {
    item: state.mainReducer.a
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch({type: 'TEST'});
    }
  };
};

const ButtonContainer = connect(mapStateToProps, mapDispatchToProps)(Button);

export default ButtonContainer;

