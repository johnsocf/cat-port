import React, { Component } from 'react';
import {NavigationContainer, NavItem, NavItemAnchor, NavigationWrapper, OverlayNav} from './Navigation.style';
import Scrollchor from 'react-scrollchor';
import {A} from '../../theme/types';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
    constructor() {
        super();

        this.state = {
            itemSelected:'active home'
        };

        this.selectMenuItem = this.selectMenuItem.bind(this);


    }
    selectMenuItem(event, testText) {
        console.log('test text', testText);
        this.setState({testText: testText});
    }
    render() {
        return (
          <NavigationWrapper>
              <NavigationContainer>
                  <NavItem id="homes" className={this.state.testText} onClick={(evt)=>this.selectMenuItem(evt, 'active home')}>
                      <Scrollchor className="item-anchor active" animate={{offset: 30, duration: 800}} to="#home"><span className="nav-wrapper">Home</span></Scrollchor>
                  </NavItem>
                  <NavItem id="resumes" className={this.state.testText} onClick={(evt)=>this.selectMenuItem(evt, 'active resume')}>
                      <Scrollchor className="item-anchor" animate={{offset: 30, duration: 800}} to="#resume"><span className="nav-wrapper">Resume</span></Scrollchor>
                  </NavItem>
                  <NavItem id="projects" className={this.state.testText} onClick={(evt)=>this.selectMenuItem(evt, 'active projects')}>
                      <Scrollchor className="item-anchor" animate={{offset: 30, duration: 800}} to="#work"><span className="nav-wrapper">Projects</span></Scrollchor>
                  </NavItem>
                  <NavItem id="abouts" className={this.state.testText} onClick={(evt)=>this.selectMenuItem(evt, 'active about')}>
                      <Scrollchor className="item-anchor" animate={{offset: 30, duration: 800}} to="#about"><span className="nav-wrapper">About</span></Scrollchor>
                  </NavItem>
                  <NavItem id="contacts" className={this.state.testText} onClick={(evt)=>this.selectMenuItem(evt, 'active contact')}>
                      <Scrollchor className="item-anchor" animate={{offset: 30, duration: 800}} to="#contact"><span className="nav-wrapper">Contact</span></Scrollchor>
                  </NavItem>
                  <NavItem className="logo">
                      <img src={require('../../assets/top_logo.png')}/>
                  </NavItem>
              </NavigationContainer>
          </NavigationWrapper>
        );
    }
}

export default Navigation;
