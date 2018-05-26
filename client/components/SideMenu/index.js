import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export const SideMenu = (props) => {
  const { user } = props;
  console.log('sidebar props', props)

    return (
      <div className='sidemenu-wrapper'>
        <div className='sidemenu-wrapper_item'>
          <Link to='/articles'>
            <span>see all articles</span>
          </Link>
        </div>
        {
          user && user.name ?
          <div className='sidemenu-wrapper_item'>
            <Link to='/users'>
              <span>see all users</span>
            </Link>
          </div>
          :
          null
        }
      </div>
    )
};
