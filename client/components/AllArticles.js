import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchArticles } from '../store/articles';

class AllArticles extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.loadArticles();
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <h2>All Articles</h2>
        <ul id='all-articles-ul'>
          {this.props.articles.map(article => {
            return(
              <li key={article.id}>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
              </li>
            )
          })}
        </ul>
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

const AllArticlesContainer = connect(mapStateToProps, mapDispatchToProps)(AllArticles);
export default AllArticlesContainer;
