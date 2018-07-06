import styled from 'styled-components';
import {Flex, Div} from 'theme/grid';
import {torquoise, komaru, pink} from 'theme/variables';
import {Link} from 'react-router';

export const NavigationContainer = styled(Flex)`
  position: fixed;
  right: 0;
  right: 2em;
  top: 1.8em;
  z-index: 10;
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
    background-color: ${komaru};
    z-index: -1;
    transform: scale(1.1, 1.2);
  }
`;