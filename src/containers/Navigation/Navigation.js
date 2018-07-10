import React, { Component } from 'react';
import {NavigationContainer, NavItem} from './Navigation.style';
import Scrollchor from 'react-scrollchor';
import {A} from '../../theme/types';

class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem to="">Home</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem><Scrollchor animate={{offset: 30, duration: 800}} className="nav-link" to="#test">Test</Scrollchor></NavItem>
        <NavItem><Scrollchor className="nav-link" to="#work">Work</Scrollchor></NavItem>
        <NavItem to="/aboutMe">About Me</NavItem>
        <NavItem>Contact</NavItem>
      </NavigationContainer>
    );
  }
}

export default Navigation;
