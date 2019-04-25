function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      //return existing state with new comment

      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case 'REMOVE_COMMENT':
      const {i} = action;
      return [
        ...state.slice(0, i), // elements before i
        ...state.slice(i + 1) // elements after i
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      //take current state
      ...state,
      // overwrite specific
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

export default comments;
