import React from 'react';
import {connect} from 'react-redux'
import { Route, Switch, Link, withRouter } from 'react-router-dom';
// import history from 'history';
import { fetchArticles } from '../../store/articles';
import { me } from '../../store/user';
import Navbar from '../Navbar';
import AllArticles from '../AllArticles';

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
        <Switch>
          <Route path='/articles' component={AllArticles} />
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

