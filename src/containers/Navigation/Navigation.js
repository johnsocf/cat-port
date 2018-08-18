import React, { Component } from 'react';
import {NavigationContainer, NavItem, NavItemAnchor, NavigationWrapper, OverlayNav} from './Navigation.style';
import Scrollchor from 'react-scrollchor';
import {A} from '../../theme/types';

class Navigation extends Component {
  render() {
    return (
      <NavigationWrapper>
          <NavigationContainer>
              <NavItem>
                  <NavItemAnchor className="item-anchor" to="/">Home</NavItemAnchor>
              </NavItem>
              <NavItem><NavItemAnchor className="item-anchor" to="/projects">Projects</NavItemAnchor></NavItem>
              <NavItem><NavItemAnchor className="item-anchor"><Scrollchor className="item-anchor" animate={{offset: 30, duration: 800}} className="nav-link" to="#test">Test</Scrollchor></NavItemAnchor></NavItem>
              <NavItem><NavItemAnchor className="item-anchor"><Scrollchor className="nav-link item-anchor" to="#work">Work</Scrollchor></NavItemAnchor></NavItem>
              <NavItem to="/aboutMe"><NavItemAnchor className="item-anchor">About Me</NavItemAnchor></NavItem>
              <NavItem><NavItemAnchor to="/contactMe">Contact Me</NavItemAnchor></NavItem>
          </NavigationContainer>
      </NavigationWrapper>
    );
  }
}

export default Navigation;
