import React from 'react';
import './style.scss';

export const Button = (props) => {
  const {id, title, action} = props;

  return(
    <div id={id}
      className='btn-container'
      onClick={action}
    >
      {title}
    </div>
  );
}
