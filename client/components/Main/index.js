import React from 'react';
import {connect} from 'react-redux'
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import { me } from '../../store/user';
import Navbar from '../Navbar';
import AllArticles from '../AllArticles';
import AllUsers from '../AllUsers';
import Home from '../Home';
import Calendar from '../Calendar';
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
    const { user, history, isLoggedIn } = this.props;

    return(
      <div>
        <Navbar user={user} history={history} />
        <div className='main-wrapper'>
          <div className='main-wrapper_sidemenu'>
            <SideMenu user={user} />
          </div>
          <div className='main-wrapper_content'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/articles' component={AllArticles} />
              {isLoggedIn &&
                <Switch>
                  <Route path='/users' component={AllUsers} />
                  <Route path='/calendar' component={Calendar} />
                </Switch>
              }
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    user: storeState.user,
    isLoggedIn: !!storeState.user.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(me())
  }
}

const MainContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default MainContainer;

