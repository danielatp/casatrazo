import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MyModalContainer from '../../common/MyModal';
import {Button} from '../../common/Button';
import Login from '../Login';
import { logout } from '../../store/user';
import './style.scss';

class Navbar extends React.Component {
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    this.props.logout()
  }

  render() {
    const { user } = this.props;
    return (
      <div className='navbar'>
        <Link to='/' className='navbar_logo'>
          <div>CASATRAZO LOGO</div>
        </Link>
        {!user.name ?
          <MyModalContainer
            name='Admin'
            content={<Login />}
          />
        :
          <React.Fragment>
            <div>Hola {user.name}</div>
            <Button id='btn-logout' title='Logout' action={this.handleLogout} />
          </React.Fragment>
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

const NavbarContainer = connect(null, mapDispatchToProps)(Navbar)
export default NavbarContainer;
