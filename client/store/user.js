//this file shoul be called currretUser
import axios from 'axios';

//INITIAL STATE
const defaultUser = {};

//ACTION TYPES
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const REMOVE_USER = 'REMOVE_USER';

//ACTION CREATORS
const setCurrentUser = (user) => ({type: SET_CURRENT_USER, user})
const removeUser = () => ({type: REMOVE_USER})

//THUNK CREATORS
export const me = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(setCurrentUser(res.data || defaultUser)))
      .catch(err => console.log(err))

export const login = (email, password) => {
  return function(dispatch){
    axios.put('/auth/login', {email, password})
    .then(res => res.data)
    .then(user => {
      dispatch(setCurrentUser(user))})
    .catch(err => console.log(err))
  }
}

export const logout = () => {
  return function(dispatch){
    axios.put('/auth/logout')
    .then(() => {
      dispatch(removeUser())
    })
    .catch(err => console.log(err))
  }
}

//REDUCER
export default function (state = defaultUser, action){
  switch (action.type){

    case SET_CURRENT_USER:
      return action.user;

    case REMOVE_USER:
      return {};

    default:
      return state;
  }
}
