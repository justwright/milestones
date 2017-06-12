import React, { Component } from 'react';
import './App.css';
import createHistory from 'history/createBrowserHistory';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes history={createHistory} />
        <Footer />
      </div>
    );
  }
}

export default App;
