import React, { Component } from 'react';
import {Background} from './App.style';
import Navigation from '../Navigation/Navigation'
import ReallySmoothScroll from 'really-smooth-scroll';
import {hashHistory} from 'react-router';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.style.css';

hashHistory.listen(()=> {
  console.log('history');
  window.scrollTo(0, 0);
});

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
    <ParallaxProvider>
      <div className="very-outer-wrapper">
        <Background/>
        <Navigation/>
        {this.props.children}
      </div>
    </ParallaxProvider>
    );
  }
}

export default App;
