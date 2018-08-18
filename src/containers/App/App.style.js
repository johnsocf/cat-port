import styled from 'styled-components';
import {torquoise, pink} from '../../theme/variables';

export const Background = styled.div`
  position: fixed;
  left: 10vw;
  width: 100%;
  top: 10vh;
  height: 100%;
  //background-image: url(${require('../../assets/owl.jpg')});
  //background-color: ${pink};
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
  opacity: .4;
`;