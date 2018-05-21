import React from 'react';
import {connect} from 'react-redux'
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import { me } from '../../store/user';
import Navbar from '../Navbar';
import AllArticles from '../AllArticles';
import AllUsers from '../AllUsers';

class Main extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.loadUser();
  }

  render(){
    const { user } = this.props;

    return(
      <div>
        <Navbar user={user} />
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
    user: storeState.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(me())
  }
}

const MainContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default MainContainer;

