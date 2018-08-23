import styled from 'styled-components';
import {Flex, Div} from '../../theme/grid';
import {torquoise, blue, pink} from '../../theme/variables';
import {Link} from 'react-router';
import './Navigation.style.css';
//import { NavLink } from 'react-router-dom'
//import { HashLink as Link } from 'react-router-hash-link';

export const NavigationWrapper = styled.div`
  position: fixed;
   z-index: 100;
   width: 100%;
   border: 2px solid deeppink;
   border-left: 0px;
   border-right: 0px;
   top: 0;
   left: 0;
`;

export const NavigationContainer = styled.ul`
  top: 1.8em;
  display: flex;
  left: 120px;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #000000;
  border-left: 0px;
  border-right: 0px;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`;

export const NavItem = styled.li`
    height: auto;
    display: flex;
    .item-anchor {
        padding: 10px;
        font-size: 21px;
        cursor: pointer;
        color: #000000;
        position: relative;
        border: 1px solid transparent;
        text-transform: uppercase;

        text-decoration: none;
        transition-duration: 500ms;
        //border-right: 1px solid transparent;
        //border-left: 1px solid transparent;
        transition: background-color .4s ease-in, color .4s ease-in;
        background-color: transparent;
    }
    .overlay-nav-div.home .item-anchor {
        display: none;
    }
    &:hover {
        .item-anchor {
          color: #FFFFFF;
          background-color: black;

          //z-index: -1;
          // transform: scale(1.1, 1.2);
          //border-right: 1px solid #000000;
          //border-left: 1px solid #000000;
          //&:first-of-type {
          //  border-right: 1px solid #000000;
          //  border-left: 1px solid transparent;
          //}
          //&:last-of-type {
          //  border-left: 1px solid #000000;
          //  border-right: 1px solid transparent;
          //}
        }
        .overlay-nav-div.home a {
            display: block;
        }
        .overlay-nav-div.home {
            color: green;
            width: 77px;
            animation-direction: reverse;
        }
        .item-anchor {
            opacity: 0px;
            border-left: 1px solid deeppink;
            border-right: 1px solid deeppink;
        }
    }
    a {text-decoration: none; color: #000000;}
    &.logo {
       display: block;
       img {
            height: auto;
            max-width: 73px;
            position: absolute;
            top: 3px;
            right: 142px;
        }
    }
`;

export const NavItemAnchor = styled(Link)`
  text-decoration: none;
`;

export const OverlayNav = styled.div `
    height: 100%;
    width: 0;
    transition: width .4s ease-in;
    position: absolute;
`;