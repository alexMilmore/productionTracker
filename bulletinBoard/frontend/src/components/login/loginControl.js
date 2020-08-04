import React, {Component} from 'react';
import store from '../store'
import Login from './login'
import Signup from './signup'

class LoginControl extends Component {
  constructor(props){
    super(props);
    this.state = {login: 1}
  }

  onButtonPress() {
    if (this.state.login === 1) {
      this.setState({login: 0});
    }
    else {
      this.setState({login: 1});
    }
  }

  render() {
    if (this.state.login === 1) {
        return(
          <div>
            <Login/>
            <button className='btn btn-secondary' onClick={this.onButtonPress.bind(this)}> Create new account </button>
          </div>
        );
    }
    return(
      <div>
        <Signup/>
        <button className='btn btn-secondary' onClick={this.onButtonPress.bind(this)}> Already have account </button>
      </div>
    );
  }
}

export default LoginControl;
