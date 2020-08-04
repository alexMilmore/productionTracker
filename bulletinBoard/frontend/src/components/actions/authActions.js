import {AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT} from './types'

export const authStart = () => {
  return {
    type: AUTH_START
  }
}

export const authSuccess = (token) => {
  return {
    type: AUTH_SUCCESS,
    payload: token
  }
}

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    payload: error
  }
}

export const authLogout = (token) => {
  return {
    type: AUTH_LOGOUT,
    payload: token
  }
}
