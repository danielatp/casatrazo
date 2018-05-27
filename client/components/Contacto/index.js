import React from 'react';
import ReactMap from './ReactMap';
import './index.scss';

export default class Contacto extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='contacto-wrapper'>
        <div className='contacto-wrapper_map'>
          <ReactMap />
        </div>
        <div className='contacto-wrapper_content'>
          <h3>Contacto</h3>
          <span>Teléfono: 888888888</span>
          <span>Mail: casa@trazo.com</span>
        </div>
      </div>
    );
  }
}
