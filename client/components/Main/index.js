import React from 'react';
import {connect} from 'react-redux'
import { Route, Switch, Link, withRouter } from 'react-router-dom';
// import history from 'history';
import { fetchArticles } from '../../store/articles';
import Navbar from '../Navbar';
import AllArticles from '../AllArticles';

class Main extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.loadArticles();
  }

  render(){
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadArticles: () => dispatch(fetchArticles()),
  }
}

const MainContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default MainContainer;

