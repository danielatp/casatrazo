import React from 'react';
import {connect} from 'react-redux'
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import { me } from '../../store/user';
import Navbar from '../Navbar';
import AllArticles from '../AllArticles';
import AllUsers from '../AllUsers';
import { SideMenu } from '../SideMenu';
import './index.scss';

class Main extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.loadUser();
  }

  render(){
    const { user, history } = this.props;
    console.log('Main props:', this.props)
    return(
      <div>
        <Navbar user={user} history={history} />
        <div className='main-wrapper'>
          <SideMenu user={user} />
          <div className='main-wrapper_content'>
            <Switch>
              <Route path='/articles' component={AllArticles} />
              <Route path='/users' component={AllUsers} />
            </Switch>
          </div>
        </div>
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

