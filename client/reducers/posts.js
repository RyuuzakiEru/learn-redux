function posts ( state=[], action ){
  console.log(state, action);
  const i = action.index;
  switch (action.type){
    case 'INCREMENT_LIKES':
      //return new state, pure function
      return [
        ...state.slice(0,i), // elements before i
        {...state[i], likes: state[i].likes +1},
        ...state.slice(i+1), // elements after i
      ]
    default:
      return state;
  }

}

export default posts;
