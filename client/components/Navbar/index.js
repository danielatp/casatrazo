import React from 'react';
import { Link } from 'react-router-dom';
import MyModalContainer from '../MyModal';
import Login from '../Login';
import './style.scss';

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar_logo'>
        <div>CASATRAZO LOGO</div>
      </Link>
      <MyModalContainer
        name='Admin'
        content={<Login />}
      />
    </div>
  );
}

export default Navbar;
