import React, { Component } from 'react';
// import Component1 from './components/Component1';
// import ComponentA from './components/ComponentA';
// import ComponentB from './components/ComponentB';
import './App.css';
import axios from 'axios';
// import Component2 from './components/component2';
/* STATEFULL - PARENT - NYIMPEN DATA */
class App extends Component {
  state = {
    comments: [],
    loading: false
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/comments').then(res => {
      // console.log(res.data);
      const comments = res.data;
      this.setState({ comments, loading: true });
    });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <ul>{this.state.comments.map(person => <li>{person.name}</li>)}</ul>
        ) : (
          <h1>Loading.......</h1>
        )}
      </div>
    );
  }
}

export default App;
