import styled from 'styled-components';
import {blue, myrtle, torquoise, pink} from 'theme/variables';

export const A = styled.a`
 color: ${myrtle};
 text-decoration: none;
 position: relative;
 z-index: 1;
 &:after {
   content: ' ';
   position: absolute;
   left: 0;
   bottom: 0;
   height: 100%;
   width: 0;
   z-index: -1;
   background-color: ${myrtle};
   transition: height .1s, background-color .2s, width .1s, background-color .2s;
 }
 &:hover:after {
   //height: 100%;
   width: 100%;
   background-color: ${pink};
 }
`;