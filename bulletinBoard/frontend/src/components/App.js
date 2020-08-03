import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value:0, data:null};
  }

  onButtonClick(event) {
    let number = this.state.num;
    this.setState({value:this.state.value+1});
  }

  onGetNums() {
    fetch("http://127.0.0.1:8000/api/Votes/")
      .then(response => response.text())
      .then(data => this.setState({ data }));
    console.log(this.state.data);
  }

  onClickPost() {
    var $crf_token = $('[name="csrfmiddlewaretoken"]').attr('value');
    var postData = {firstChoice:7, secondChoice:3,thirdChoice:2};
    fetch("http://127.0.0.1:8000/api/Votes/", {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        "X-CSRFToken": $crf_token
      },
      body:JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => console.log("Sucessfully added:", data))
    .catch((error) => console.log("Failed:", error))
  }

  render () {
    return (
      <div>
        <h1> Application </h1>
        <p> This is my first react application using django as a backend </p>
        <p> {this.state.value} </p>
        <button onClick={this.onButtonClick.bind(this)}>Press me</button>
        <p> Current stored stuff </p>
        <p> {this.state.data} </p>
        <button onClick={this.onGetNums.bind(this)}>Get numbers</button>
        <button onClick={this.onClickPost.bind(this)}>Post Button</button>
      </div>
    );
  }
}

//ReactDOM.render(<App />, document.getElementById('app'));
export default App;
