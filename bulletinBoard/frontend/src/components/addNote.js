import React, {Component} from 'react'
import {newPost} from './actions/postActions';
import store from './store'

class AddNote extends Component {
  constructor(props){
    super(props);
    this.formData = {title: '', body: '', type: '', catagory: ''}
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

  onChangeForm = topic => event => {
    this.formData[topic] = event.target.value;
  }

  onSubmitForm() {
    store.dispatch(newPost(this.formData, this.getCookie('csrftoken')));
  }

  render() {
    return(
      <div>
        <form>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-3'>
                <h2> Title </h2>
                <br />
                <input type='text' onChange={this.onChangeForm('title').bind(this)}></input>
              </div>
              <div className='col-sm-3'>
                <h2> Body </h2>
                <br />
                <textarea onChange={this.onChangeForm('body').bind(this)}></textarea>
              </div>
              <div className='col-sm-3'>
                <h2> Catagory </h2>
                <br />
                <select className="custom-select" onChange={this.onChangeForm('type').bind(this)}>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                </select>
              </div>
              <div className='col-sm-3'>
                <h2> Type </h2>
                <br />
                <select className="custom-select" onChange={this.onChangeForm('type').bind(this)}>
                  <option value="bug">Bug</option>
                  <option value="feature">Feature</option>
                </select>
              </div>
            </div>
          </div>
        </form>
        <button className='btn btn-primary' onClick={this.onSubmitForm.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default AddNote;
