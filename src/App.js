import React, { Component } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
    state = {
      search:""
  }

  handleSearch = (event) => {
      const search = event.target.value
      this.setState({search})
      console.log(this.state.search);
  }

  render() {
    return (
      <div>
        <Header handleSearch={this.handleSearch}/>
        <Main search={this.state.search}/>
        <Footer />
      </div>
    );
  }
}

export default App;
