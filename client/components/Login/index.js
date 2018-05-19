import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../store/modal';
import { login } from '../../store/user';
import './style.scss';


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onCloseModal();
    const email = event.target.email.value
    const password = event.target.password.value
    this.props.login(email, password);
  }

  render() {
    return (
      <div className='login-wrapper'>
        <form onSubmit={this.handleSubmit}>
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
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseModal: () => dispatch(closeModal()),
    login: (email, password) => dispatch(login(email, password)),
    // handleSubmit (event) {
    //   event.preventDefault()
    //   const email = event.target.email.value
    //   const password = event.target.password.value
    //   dispatch(login(email, password))
    // }
  }
}

const LoginContainer = connect(null, mapDispatchToProps)(Login);
export default LoginContainer;
