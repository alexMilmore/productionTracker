import React, {Component} from 'react';
import {authStart, authSucess, authFail, authLogout} from '../actions/authActions';
import store from '../store'
import getToken from '../tokens/getToken'

class Signup extends Component {
  constructor(props){
    super(props);
    this.formData = {username: '', email: '', accoutType: '', password1: '', password2: ''};
  }

  onChangeForm = topic => event => {
    this.formData[topic] = event.target.value;
  }

  onSubmitForm() {
    console.log(this.formData);
    fetch('http://127.0.0.1:8000/rest-auth/registration/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getToken('csrftoken')
      },
      body: JSON.stringify(this.formData)
    }).then((data) => (console.log(data)))
    .catch((error) => (console.log(error)));
  }

  render() {
    return (
      <div>
        <h2> Sign up </h2>
        <form>
          <h3> Username </h3>
          <input type='text' onChange={this.onChangeForm('username').bind(this)}></input>
          <h3> Account type </h3>
          <select className="custom-select" onChange={this.onChangeForm('accoutType').bind(this)}>
            <option value="1">Programmer</option>
            <option value="2">Manager</option>
          </select>
          <h3> Email </h3>
          <input type='text' onChange={this.onChangeForm('email').bind(this)}></input>
          <h3> Password </h3>
          <input type='password' onChange={this.onChangeForm('password1').bind(this)}></input>
          <h3> Confirm Password </h3>
          <input type='password' onChange={this.onChangeForm('password2').bind(this)}></input>
        </form>
        <button className='btn btn-primary' onClick={this.onSubmitForm.bind(this)}> Sign up </button>
      </div>
    );
  }
}

export default Signup;
