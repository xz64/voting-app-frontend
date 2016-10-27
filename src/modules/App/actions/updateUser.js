function updateUser({ state, input }) {
  state.set('app.user.id', input.result.username);
}

export default updateUser;
