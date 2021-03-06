import { RESIZE_WINDOW, SET_HAS_ERROR } from './types'

export const resizeWindow = window => dispatch => {
  window.isMaximized = !window.isMaximized

  dispatch({
    type: RESIZE_WINDOW,
    payload: window.isMaximized
  })
}

export const setHasError = hasError => dispatch => {
  dispatch ({
    type: SET_HAS_ERROR,
    payload: hasError
  })
}