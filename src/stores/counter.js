import { INCREMENT } from '../constants/ActionTypes';

const initialState = {
  count: 0
}

export default function counter(state=initialState, action) {
  const { count } = state;
  switch(action.type){
    case INCREMENT:
      return { count: count+1 };
    default:
      return state;
  }
}
