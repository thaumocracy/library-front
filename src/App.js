import React, { Component } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  state = {
    search:""
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }
  

  handleSearch = (event) => {
      const search = event.target.value
      this.setState({search})
      console.log(this.state.search);
  }

  handleScroll = (event) => {
    console.log('[HandleScroll working]')
  }
  render() {
    return (
      <div className="app-container">
        <Header handleSearch={this.handleSearch}/>
        <Main search={this.state.search} onScroll={this.handleScroll}/>
        <Footer />
      </div>
    );
  }
}

export default App;
