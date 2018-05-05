import axios from 'axios';

//INITIAL STATE
const defaultArticles = [];

//ACTION TYPES
const GET_ARTICLES = 'GET_ARTICLES';

//ACTION CREATORS
const getArticles = (articles) => ({type: GET_ARTICLES, articles})

//THUNK CREATORS
export const fetchArticles = () => {
  return function(dispatch){
    axios.get('/api/articles')
        .then(res => res.data)
        .then(articles => dispatch(getArticles(articles)))
        .catch(err => console.log(err))
   }
}

//REDUCER
export default function (state = defaultArticles, action){
   switch (action.type){
    case GET_ARTICLES:
      return action.articles;

    default:
      return state;
   }
}
