import React, { Component } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  state = {
    search:"",
    fixed:false,
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
    if(window.pageYOffset < 100 && this.state.fixed){
      this.setState({fixed:false})
    }
    if(window.pageYOffset > 100 && !this.state.fixed){
      this.setState({fixed:true})
    }
    if(window.pageYOffset > window.innerHeight - 50 ){
      console.log(`[Enlarge your JS]`)
    }
  }

  render() {
    return (
      <div className="app-container">
        <Header handleSearch={(event) => this.handleSearch(event)} fixed={this.state.fixed}/>
        <Main search={this.state.search} onScroll={this.handleScroll}/>
        <Footer />
      </div>
    );
  }
}

export default App;
