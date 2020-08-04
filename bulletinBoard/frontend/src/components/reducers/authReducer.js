import {AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT} from '../actions/types'

const authInitialState = {
  error: false,
  loading: false,
  token: null,
  user: null,
  accountType: null
}

export default function(state = authInitialState, action) {
  switch (action.type) {
    case AUTH_START:
      return{error: false, loading: true}
    case AUTH_SUCCESS:
      return{error: false, loading: false, token: action.payload}
    case AUTH_FAIL:
      return{error: true, loading: false}
    case AUTH_LOGOUT:
      return{error: false, loading: false, token: null, user: null, accountType: null}
    default: return state;
  }
}
