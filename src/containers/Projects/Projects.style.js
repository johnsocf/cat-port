import styled from 'styled-components';
import {torquoise, pink, blue} from '../../theme/variables';

export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  height: 250px;
  width: auto;
  position: relative;
  display: flex;
  z-index: 1;
  display: flex;
  border: 10px solid white;
  margin: 10px;

  & > img {
    transition: transform .3s;
  }

  &:hover {
    & > img {
      transform: scale(1.3);
    }
    & > p {
      left: 20px;
    }
    & > .overlay {
      opacity: .7;
    }
  }
`;

export const Index = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 0;
  h1 {
    font-size: 4em;
    margin: 0px;
    font-weight: bold;
    color: ${pink};
    opacity: 0.4
    transform: translateY(100%);
  }
`;

export const ImageContainer = styled.div`
   width: 100%;
   margin: 0 auto;
`;

export const TagLineContainer = styled.div`
   width: 100%;
   margin: 0 auto;
   background: #000000;
   text-align: right;
   color: #FFFFFF;
`;

export const OffsetImageContainer = styled.div`
   width: 100%;
   margin: 0 auto;
   position: absolute;
   bottom: 75px;
   left: 0;
   z-index: 10;
   top: auto;
`;

export const Title = styled.h1`
  color: ${blue};
  font-weight: bold;
`;

export const ProjectTitle = styled.p`
  position: absolute;
  left: 10px;
  padding: 4px;
  margin: 0px;
  bottom: 10px;
  color: black;
  background: white;
  font-size: 24px;
  align-self: center;
  text-transform: uppercase;
  transition: left .3s ease-in;
  transition-delay: .15s;
  z-index: 3;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: deeppink;
  align-self: center;
  transition: opacity .1s ease-in;
  transition-delay: .05s;
  z-index: 2;
  height: 100%;
  width: 100%;
`;

export const CloseModal = styled.button `
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const WebsiteTarget = styled.a`
    position: absolute;
    z-index: 100000000;
    top: 50px;
    color: white;
    background: black;
    padding: 6px;
    left: 50px;
    &:hover {
       color: deeppink;
    }
`;

export const ProjContainer = styled.div`
   position: relative;
   padding-top: 30px;
   &:hover .anim-title {
        left: 20px;
   }
`;

export const ProjAnimTitle = styled.p`
   position: absolute;
   top: 0px;
   left: 0px;
   padding: 4px;
  margin: 0px;
  bottom: 10px;
  color: black;
  background: transparent;
  pointer-events: none;
  font-size: 24px;
  align-self: center;
  text-transform: uppercase;
  transition: left .3s ease-in;
  transition-delay: .15s;
  z-index: 3;
`;