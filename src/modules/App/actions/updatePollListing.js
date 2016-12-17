function updatePollListing({ state, input }) {
  state.set('polls.polls', input.result);
}

export default updatePollListing;
