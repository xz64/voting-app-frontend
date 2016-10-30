function updateUser({ state, input }) {
  state.set('app.user.id', input.data.username);
}

export default updateUser;
