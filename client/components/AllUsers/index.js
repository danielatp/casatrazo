import React, { Component } from 'react';
import {connect} from 'react-redux';
import MyModalContainer from '../MyModal';
import CreateUserForm from '../CreateUserForm'
import { fetchUsers } from '../../store/users';

class AllUsers extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.loadUsers();
  }

  render(){
    return(
      <div>
        <h2>All Users</h2>
        <MyModalContainer
          name='Create User'
          content={<CreateUserForm />}
        />
        <ul id='all-users-ul'>
          {this.props.users.map(user => {
            return(
              <li key={user.id}>
                <h3>{user.name}</h3>
                <p>{`email: ${user.email}`}</p>
                <p>{`password: ${user.password}`}</p>
                <p>{`case: ${user.case}`}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    users: storeState.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(fetchUsers()),
  }
}

const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsers);
export default AllUsersContainer;
