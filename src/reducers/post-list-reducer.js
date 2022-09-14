const reducer = (state = {}, action) => {
  const { title, url, description, votes, id, timeStamp } = action;
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]: {
          title: title,
          timeStamp: timeStamp,
          url: url,
          description: description,
          votes: votes,
          id: id
        }
      });
    case 'DELETE_POST':
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default reducer;
