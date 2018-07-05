import React, { Component } from 'react';
import {NavigationContainer, NavItem} from './Navigation.style';
import {A} from 'theme/types';
import {hashHistory} from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem href="#test">Test</NavItem>
        <NavItem>About Me</NavItem>
        <NavItem>Contact</NavItem>
      </NavigationContainer>
    );
  }
}

export default Navigation;
