import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchPosts, deletePost, newPost, editPost} from './actions/postActions';
import store from './store'

class PostList extends Component {
  onPressDelete = id => event => {
    store.dispatch(deletePost(id, this.getCookie("csrftoken")));
  }

  onPressComplete = (id) => event => {
    store.dispatch(editPost(id, {complete: true}, this.getCookie("csrftoken")));
  }

  onPressEdit = (id, patch) => event => {
    store.dispatch(editPost(id, patch, this.getCookie("csrftoken")));
  }

  getCookie(name) {
      var cookieValue = null;
      if (document.cookie && document.cookie !== '') {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i++) {
              var cookie = jQuery.trim(cookies[i]);
              // Does this cookie string begin with the name we want?
              if (cookie.substring(0, name.length + 1) === (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
  }

  render() {
    if (this.props.posts === null) {
      return (<h1> LOADING </h1>);
    }
    return (
      <div>
        {this.props.posts.map((entry) => (
          <div key={entry.id}>
            <h1> {entry.title} </h1>
            <p> {entry.body} </p>
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <p> Complete: {String(entry.complete)}</p>
                </div>
                <div className="col-sm-3">
                  <p> Created on: {entry.dateCreated} </p>
                </div>
                <div className="col-sm-3">
                  <p> Last edit on: {entry.dateEdited} </p>
                </div>
                <div className="col-sm-1">
                  <button className="btn btn-primary" onClick={this.onPressComplete(entry.id)}> Complete </button>
                </div>
                <div className="col-sm-1">
                  <button className="btn btn-secondary" onClick={this.onPressEdit(entry.id, {title: "edited"})}> Edit </button>
                </div>
                <div className="col-sm-1">
                  <button className="btn btn-danger" onClick={this.onPressDelete(entry.id)}> Delete </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, {fetchPosts})(PostList);
