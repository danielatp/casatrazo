import React from 'react';
import Modal from 'react-responsive-modal';

class MyModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false,
      name: props.name,
      content: props.content
    }
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onOpenModal() {
    this.setState({ showModal: true });
  };

  onCloseModal() {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal, name, content } = this.state;
    return (
      <div className='modal'>
        <button
          className='modal_btn'
          onClick={this.onOpenModal}>
          {name}
        </button>
        <Modal open={showModal} onClose={this.onCloseModal} center>
          {content}
        </Modal>
      </div>
    );
  }
}

export default MyModal;
