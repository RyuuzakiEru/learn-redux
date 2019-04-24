function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      //return existing state with new comment

      return [...state, {
        user: action.author,
        text: action.comment,
      }];
    case 'REMOVE_COMMENT':
      return state;
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
