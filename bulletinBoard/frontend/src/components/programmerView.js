import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from './actions/postActions';
import PostList from './postList'
import AddNote from './addNote'
import LoginControl from './login/loginControl'
import RequestPanel from './requestPanel'

class ProgrammerView extends Component {
  constructor(props) {
    super(props);
    this.state = {view: 'jobs'}
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  onButtonPress = (id) => event => {
    this.setState({view: id});
  }

  render () {
    if (this.props.posts === null) {
      return (<p> Loading </p>);
    }
    else if (this.state.view === 'jobs') {
      return (
        <div>
          <div className="jumbotron">
            <h1> Welcome {this.props.auth.user} </h1>
            <button className='btn btn-primary' onClick={this.onButtonPress('jobs').bind(this)}> Jobs </button>
            <button className='btn btn-primary' onClick={this.onButtonPress('request').bind(this)}> Request/report bug </button>
          </div>
          <div>
            <PostList componentTitle='Outstanding Jobs'/>
          </div>
          <div>
            <PostList componentTitle='Completed Jobs'/>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="jumbotron">
          <h1> Welcome {this.props.auth.user} </h1>
          <button className='btn btn-primary' onClick={this.onButtonPress('jobs').bind(this)}> Jobs </button>
          <button className='btn btn-primary' onClick={this.onButtonPress('request').bind(this)}> Request/report bug </button>
        </div>
        <div>
          <RequestPanel/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  auth: state.auth
});

//ReactDOM.render(<App />, document.getElementById('app'));
export default connect(mapStateToProps, {fetchPosts})(ProgrammerView);
