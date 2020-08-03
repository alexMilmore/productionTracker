import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {fetchPosts} from './actions/postActions';
import PostList from './postList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value:0, data:null};
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  onButtonClick(event) {
    let number = this.state.num;
    this.setState({value:this.state.value+1});
  }


  render () {
    if (this.props.posts === null) {
      return (<p> Loading </p>);
    }
    return (
      <div>
        <div className="jumbotron">
          <h1> Bulletin Board </h1>
        </div>
        <PostList/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

//ReactDOM.render(<App />, document.getElementById('app'));
export default connect(mapStateToProps, {fetchPosts})(App);
