export default (state = {a: 0}, action) => {
  const output = Object.assign({}, state);
  switch(action.type) {
  case 'TEST':
    output.a++;
    return output;
  default:
    return state;
  }
};
