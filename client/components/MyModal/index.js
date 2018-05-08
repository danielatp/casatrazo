import React from 'react';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../store/modal';
import './style.scss';

class MyModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.name,
      content: props.content
    }
  }

  render() {
    const { name, content } = this.state;
    const { onOpenModal, onCloseModal, showModal } = this.props;
    return (
      <div className='modal'>
        <button
          className='modal_btn'
          onClick={onOpenModal}>
          {name}
        </button>
        <Modal
          center
          open={showModal}
          onClose={onCloseModal}
          children={content}
        />
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    showModal: storeState.showModal,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenModal: () => dispatch(openModal()),
    onCloseModal: () => dispatch(closeModal())
  }
}

const MyModalContainer = connect(mapStateToProps, mapDispatchToProps)(MyModal);
export default MyModalContainer;
