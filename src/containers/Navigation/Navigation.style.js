import styled from 'styled-components';
import {Flex, Div} from '../../theme/grid';
import {torquoise, blue, pink} from '../../theme/variables';
import {Link} from 'react-router';

export const NavigationContainer = styled(Flex)`
  position: fixed;
  top: 1.8em;
  z-index: 100;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #ffffff;
`;

export const NavItem = styled(Link)`
  margin-right: 30px;
  font-size: 1.5em;
  cursor: pointer;
  color: ${pink};
  position: relative;
  padding: 10px;
  text-decoration: none;
  transition-duration: 500ms;
  &:hover {
    color: ${torquoise};
    background-color: ${blue};
    z-index: -1;
    transform: scale(1.1, 1.2);
  }
`;