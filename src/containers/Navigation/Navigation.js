import React, { Component } from 'react';
import {NavigationContainer, NavItem, NavItemAnchor, NavigationWrapper, OverlayNav} from './Navigation.style';
import Scrollchor from 'react-scrollchor';
import {A} from '../../theme/types';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
    constructor() {
        super();

    }
    render() {
    return (
      <NavigationWrapper>
          <NavigationContainer>
              <NavItem><NavItemAnchor activeClassName="active" className="item-anchor" to="/">Home</NavItemAnchor></NavItem>
              <NavItem>
                  <NavItemAnchor activeClassName="active" className="item-anchor">
                    <Scrollchor className="item-anchor" animate={{offset: 30, duration: 800}} className="nav-link" to="#work">Projects</Scrollchor>
                  </NavItemAnchor>
              </NavItem>
              <NavItem>
                  <NavItemAnchor activeClassName="active" className="item-anchor">
                      <Scrollchor className="item-anchor" animate={{offset: 30, duration: 800}} className="nav-link" to="#about">About</Scrollchor>
                  </NavItemAnchor>
              </NavItem>
              <NavItem>
                  <NavItemAnchor activeClassName="active" className="item-anchor">
                      <Scrollchor className="item-anchor" animate={{offset: 30, duration: 800}} className="nav-link" to="#contact">Contact</Scrollchor>
                  </NavItemAnchor>
              </NavItem>
          </NavigationContainer>
      </NavigationWrapper>
    );
    }
}

export default Navigation;
