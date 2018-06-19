import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../store/modal';
import { createUser } from '../../store/users';
// import './style.scss';


class CreateUserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      showForm: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({message: ''})

    const user = {}
    user.name = event.target.name.value
    user.email = event.target.email.value
    user.password = event.target.password.value
    user.confirmPassword = event.target.confirmPassword.value

    if(user.password === user.confirmPassword) {
      this.setState({message: 'buena!', showForm: false})
      this.props.createUser(user)
    }else{
      this.showPasswordError()
    }
  }

  showPasswordError() {
    this.setState({message: 'passwords donut match'})
  }

  render() {
    return (
      <div className='login-wrapper'>
        {this.state.message ?
          <div>{this.state.message}</div>
          :
          null
        }
        {this.state.showForm ?
          <form onSubmit={this.handleSubmit}>
            <div className='login-wrapper_section'>
              <label htmlFor="name">
                <small>Name</small>
              </label>
              <input name="name" type="text" />
            </div>
            <div className='login-wrapper_section'>
              <label htmlFor="email">
                <small>Email</small>
              </label>
              <input name="email" type="text" />
            </div>
            <div className='login-wrapper_section'>
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input name="password" type="password" />
            </div>
            <div className='login-wrapper_section'>
              <label htmlFor="confirmPassword">
                <small>Confirm Password</small>
              </label>
              <input name="confirmPassword" type="password" />
            </div>
            <div className='login-wrapper_section'>
              <button type="submit">Create</button>
            </div>
          </form>
          :
          null
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseModal: () => dispatch(closeModal()),
    createUser: (user) => dispatch(createUser(user)),
  }
}

const CreateUserFormContainer = connect(null, mapDispatchToProps)(CreateUserForm);
export default CreateUserFormContainer;
