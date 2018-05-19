import React from 'react';
import {connect} from 'react-redux'
import { Route, Switch, Link, withRouter } from 'react-router-dom';
// import history from 'history';
import { fetchArticles } from '../../store/articles';
import { me } from '../../store/user';
import Navbar from '../Navbar';
import AllArticles from '../AllArticles';
import AllUsers from '../AllUsers';

class Main extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.loadArticles();
    this.props.loadUser();
  }

  render(){
    console.log('MAIN-props', this.props);
    return(
      <div>
        <Navbar />
        <Link to='/articles'>
          see all articles
        </Link>
        <Link to='/users'>
          see all users
        </Link>
        <Switch>
          <Route path='/articles' component={AllArticles} />
          <Route path='/users' component={AllUsers} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    articles: storeState.articles,
    user: storeState.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadArticles: () => dispatch(fetchArticles()),
    loadUser: () => dispatch(me())
  }
}

const MainContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default MainContainer;

