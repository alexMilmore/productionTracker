import {FETCH_POSTS, NEW_POST, DELETE_POST, EDIT_POST} from '../actions/types';

const postInitalState = {
  items: []
}

export default function(state = postInitalState, action) {
  switch(action.type) {
    case NEW_POST:
      return {...state, items: action.payload}
    case FETCH_POSTS:
      return {...state, items: action.payload}
    case DELETE_POST:
      return {...state, items: action.payload}
      case EDIT_POST:
        return {...state, items: action.payload}
    default: return state;
  }
}
