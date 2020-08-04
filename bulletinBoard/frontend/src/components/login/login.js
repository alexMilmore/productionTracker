import React, {Component} from 'react';
import {authStart, authSuccess, authFail, authLogout} from '../actions/authActions';
import store from '../store'
import getToken from '../tokens/getToken'

class Login extends Component {
  constructor(props){
    super(props);
    this.formData = {username: '', password: ''}
  }

  onChangeForm = topic => event => {
    this.formData[topic] = event.target.value;
  }

  onSubmitForm() {
    console.log(this.formData);
    store.dispatch(authStart);
    fetch('http://127.0.0.1:8000/rest-auth/login/', {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getToken('csrftoken')
      },
      body: JSON.stringify(this.formData)
    })
      .then(result => result.json())
      .then(result => {
        console.log(result);
        store.dispatch(authSuccess(result.key))
      })
      .catch(error => {
        console.log(error);
        store.dispatch(authFail);
      });
  }

  render() {
    return (
      <div>
        <h2> Login </h2>
        <form>
          <h3> Username or email </h3>
          <input type='text' onChange={this.onChangeForm('username').bind(this)}></input>
          <h3> Password </h3>
          <input type='password' onChange={this.onChangeForm('password').bind(this)}></input>
        </form>
        <button className='btn btn-primary' onClick={this.onSubmitForm.bind(this)}> Login </button>
      </div>
    );
  }
}

export default Login;
