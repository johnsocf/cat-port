import styled from 'styled-components';
import {magenta} from '../../theme/variables';
import {Relative} from '../../theme/grid';
import PlayButton from '../PlayBtn/PlayBtn';

export const Title = styled.h1`
 margin-top: 0;
 color: ${magenta};
`;

export const ContactContainer = styled.h1`
 padding: 60px 0 0 0;
 label {
    font-weight: 600;
    padding: 5px;
    display: none;
 }
 input {
    width: 50%;
 }
 input, textarea {
    padding-top: 5px;
    border-color: #000000;
    color: #363636;
    box-shadow: none;
 }
 .button.is-link {
    background-color: black;
    text-transform: uppercase;
    color: #ffffff;
    border-radius: 2px;
 }
`;

export const BackgroundContactImage = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  opacity: .7;
`;