import React, {Component} from 'react'
import AddNote from './addNote'
import PostList from './postList'

class RequestPanel extends Component {
  render() {
    return (
      <div>
        <div className='jumbotron'>
          <h2> Suggest features / report bugs </h2>
        </div>
        <div>
          <AddNote/>
        </div>
        <div>
          <PostList componentTitle='Pending requests'/>
        </div>
        <div>
          <PostList componentTitle='Assigned requests'/>
        </div>
      </div>
    );
  }
}

export default RequestPanel;
