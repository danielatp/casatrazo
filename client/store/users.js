import axios from 'axios';

//INITIAL STATE
const defaultUsers = [];

//ACTION TYPES
const GET_USERS = 'GET_USERS';
const ADD_USER = 'ADD_USER';

//ACTION CREATORS
const getUsers = (users) => ({type: GET_USERS, users})
const addUser = (user) => ({type: ADD_USER, user})

//THUNK CREATORS
export const fetchUsers = () => {
  return function(dispatch){
    axios.get('/api/users')
        .then(res => res.data)
        .then(users => dispatch(getUsers(users)))
        .catch(err => console.log(err))
   }
}

export const createUser = (user) => {
  return function(dispatch){
    axios.post('/api/users', user)
      .then(response => {
        response.data})
      .then(() => {
        dispatch(fetchUsers())
      })
      .catch(err => {
        console.log('FRIENDLY ERROR: ', err );
      });
  }
}

//REDUCER
export default function (state = defaultUsers, action){
   switch (action.type){
    case GET_USERS:
      return action.users;

    case ADD_USER:
      return [...state, action.user];

    default:
      return state;
   }
}
