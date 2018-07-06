import React, { Component } from 'react';
import {Background} from './App.style';
import Navigation from '../Navigation/Navigation'
import ReallySmoothScroll from 'really-smooth-scroll';
import {hashHistory} from 'react-router';

hashHistory.listen(()=> {
  console.log('history');
  window.scrollTo(0, 0);
});

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <div>
        <Background/>
        <Navigation/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
