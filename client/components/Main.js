import React from 'react';
import {connect} from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom';
// import history from 'history';
import { fetchArticles } from '../store/articles';

class Main extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.loadArticles();
  }

  render(){
    console.log('props', this.props)
    return(
      <h1>yayayay</h1>
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

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
