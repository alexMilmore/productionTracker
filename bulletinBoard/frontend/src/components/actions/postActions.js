import {FETCH_POSTS, NEW_POST, DELETE_POST, EDIT_POST} from './types';

// fetches the note values to pass to the reducer
export const fetchPosts = () => dispatch => {
    fetch('http://127.0.0.1:8000/api/note/')
      .then(result => result.json())
      .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
      }));
}

// deletes the specific id then fetches the new set of falues to be passed to the
// reducer
export const deletePost = (id, token) => dispatch => {
    let apiUrl = 'http://127.0.0.1:8000/api/note/' + id + '/';
    fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        "X-CSRFToken": token
      }});
    fetch('http://127.0.0.1:8000/api/note/')
      .then(result => result.json())
      .then(posts => dispatch({
        type: DELETE_POSTS,
        payload: posts
      }));
}

export const newPost = (post, token) => dispatch => {
    let apiUrl = 'http://127.0.0.1:8000/api/note/' + id + '/';
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        "X-CSRFToken": token,
        "Content-Type": "applications/json"
      },
      body: JSON.stringify(post)
    }).catch(error => console.log(error));
    fetch('http://127.0.0.1:8000/api/note/')
      .then(result => result.json())
      .then(posts => dispatch({
        type: NEW_POST,
        payload: posts
      }));
}

export const editPost = (id, patch, token) => dispatch => {
    let apiUrl = 'http://127.0.0.1:8000/api/note/' + id + '/';
    fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        "X-CSRFToken": token,
        "Content-Type": "applications/json"
      },
      body: JSON.stringify(patch)
    }).catch(error => console.log(error));
    fetch('http://127.0.0.1:8000/api/note/')
      .then(result => result.json())
      .then(posts => dispatch({
        type: EDIT_POST,
        payload: posts
      }));
}
