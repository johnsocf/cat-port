import styled from 'styled-components';
import {Flex, Div} from '../../theme/grid';
import {torquoise, blue, pink} from '../../theme/variables';
import {Link} from 'react-router';
//import { HashLink as Link } from 'react-router-hash-link';

export const NavigationContainer = styled.ul`
  position: fixed;
  top: 1.8em;
  z-index: 100;
  display: flex;
  left: 120px;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #000000;
  list-style-type: none;
`;

export const NavItem = styled.li`
  font-size: 21px;
  cursor: pointer;
  color: #000000;
  position: relative;
  padding: 10px;
  text-decoration: none;
  transition-duration: 500ms;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
  transition: background-color .4s ease-in, color .4s ease-in;
  background-color: transparent;
  &:hover {
    color: #FFFFFF;
    background-color: ${pink};
    z-index: -1;
    // transform: scale(1.1, 1.2);
    border-right: 1px solid #000000;
    border-left: 1px solid #000000;
    &:first-of-type {
      border-right: 1px solid #000000;
      border-left: 1px solid transparent;
    }
    &:last-of-type {
      border-left: 1px solid #000000;
      border-right: 1px solid transparent;
    }
  }
  a {
    text-decoration: none;
  }
`;