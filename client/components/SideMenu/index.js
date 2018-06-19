import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export const SideMenu = (props) => {
  const { user } = props;

    return (
      <div className='sidemenu-wrapper'>
        <div className='sidemenu-wrapper_item'>
          <Link to='/articles'>
            <span>see all articles</span>
          </Link>
        </div>
        {
          user && user.name ?
          <React.Fragment>
            <div className='sidemenu-wrapper_item'>
              <Link to='/users'>
                <span>see all users</span>
              </Link>
            </div>
            <div className='sidemenu-wrapper_item'>
              <Link to='/calendar'>
                <span>calendar</span>
              </Link>
            </div>
          </React.Fragment>
          :
          null
        }
      </div>
    )
};
