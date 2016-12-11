function updatePollListing({ state, input }) {
  state.set('app.polls', input.result);
}

export default updatePollListing;
