import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from './actions/postActions';
import ProgrammerView from './programmerView';
import LoginControl from './login/loginControl';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {login: false}
  }

  render () {
    if (this.props.isLoggedIn === false) {
      return (
        <LoginControl/>
      );
    }
    return (
      <ProgrammerView/>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.token !== null
});

//ReactDOM.render(<App />, document.getElementById('app'));
export default connect(mapStateToProps)(App);
