import {
  CHANGE_SEARCH_FIELD,
  REQUEST_BOOKS_PENDING,
  REQUEST_BOOKS_SUCCESS,
  REQUEST_BOOKS_FAILED
 } from './constants'


export const setSearchField = (text) => ({ type: CHANGE_SEARCH_FIELD, payload: text })

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_BOOKS_PENDING })
  fetch('https://jsonplaceholder.typicode.com/users')
  // здесь должна быть еще строка. Может быть.
    .then(data => dispatch({ type: REQUEST_BOOKS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_BOOKS_FAILED, payload: error }))
}