import React from 'react';
// import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import MyModal from '../MyModal';
import './style.scss';

class Navbar extends React.Component {
  constructor(props){
    super(props)


  }


  render() {
    return (
      <div className='navbar'>
        <MyModal
          name='Admin'
          content='login modal'
        />
      </div>
    );
  }
}

export default Navbar;
