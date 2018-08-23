import styled from 'styled-components';
import {torquoise, pink, blue} from '../../theme/variables';

export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  height: 313px;
  width: auto;
  position: relative;
  display: flex;
  z-index: 1;
  display: flex;
  border: 0px solid white;
  margin: 0px;
  padding: 0px;

  & > img {
    transition: transform .3s;
  }

  &:hover {
    & > img {
      transform: scale(1.3);
    }
    & > p {
      left: 108px;
    }
    & > .overlay {
      opacity: .9;
    }
    & > .see-detail {
      opacity: .9;
    }
  }
`;

export const Index = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 0;
  opacity: 1;
  transition: opacity .8s ease-out;
  h1 {
    font-size: 9em;
    pointer-events: none;
    margin: 0px;
    font-weight: bold;
    color: rgb(0, 255, 249);;
    opacity: 1;
    transform: translateY(100%);
    span {
        font-size: 45px;
        &.ind {
            font-size: 32px;
        }
    }
  }
`;

export const ImageContainer = styled.div`
   width: 100%;
   margin: 0 auto;
`;

export const TagLineContainerJobTitle = styled.div`
   width: 100%;
   margin: 0 auto;
   background: #000000;
   text-align: right;
   color: #FFFFFF;
   height: 92px;
   h2 {
        font-size: 34px;
        padding: 18px 45px;
        font-weight: 800;
        letter-spacing: 2px;
   }
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
  color: ${pink};
  font-weight: bold;
  font-size: 45px;
  text-decoration: underline;
  text-transform: uppercase;
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
    top: 250px;
    color: white;
    background: black;
    padding: 0px 10px 2px 10px;
    left: 119px;
    font-size: 25px;
    &:hover {
       color: deeppink;
    }
    &.ml-link {
        top: 444px;
        right: 438px;
        left: auto;
    }
    &.climate-link {
        top: 330px;
    }
`;

export const ProjContainer = styled.div`
   position: relative;
   padding-top: 102px;
   &:hover {
        .anim-title {
            left: 116px;
            opacity: 1;
        }
        .understood {
            opacity: 0;
        }
   }
`;

export const ProjAnimTitle = styled.p`
    position: absolute;
    top: 159px;
    left: 7px;
    padding: 4px;
    margin: 0px;
    bottom: 10px;
    color: rgb(0, 255, 249);;
    background: transparent;
    pointer-events: none;
    font-size: 24px;
    align-self: center;
    text-transform: uppercase;
    transition: left .3s ease-in, opacity .3s ease-in;
    transition-delay: .15s;
    z-index: 3;
    font-weight: 600;
    height: 18px;
    line-height: 17px;
    margin: 0;
    padding: 0;
    z-index: 12;
    opacity: 0;
    line-height: 26px;
`;

export const Resume = styled.div`
  height: 1300px;
`;

export const WorkBlock = styled.div`
    &:hover {
        z-index: 10;
    }
`;

export const SeeDetail = styled.p`
    display: block;
    opacity: 0;
    pointer-events: none;
    transition: opacity .3s ease-in;
    position: absolute;
    bottom: 0px;
    left: calc(50% - 87px);
    z-index: 16;
    font-size: 38px;
    font-weight: 700;
    color: white;
    left: 20px;
`;

export const BoldTag = styled.p`
    font-weight: 900;
    padding: 10px 17px 0;
    z-index: 20;
    position: relative;
    a {
        color: #000000;
        background-color: #ffffff;
        padding: 2px 12px;
    }
    &:hover a {
        color: deeppink;
    }
`;

export const BoldSimpleTag = styled.p`
    font-weight: 900;
    padding: 10px 0px 0;
    z-index: 20;
    position: relative;
    a {
        color: #000000;
        background-color: #ffffff;
        padding: 2px 12px;
    }
    &:hover a {
        color: deeppink;
    }
`;

export const BoldTagUnderline = styled.p`
    font-weight: 900;
    padding: 10px 17px 0;
    text-decoration: underline;
`;

export const TitleContainer = styled.div`
    width: 200px;
    background: deeppink;
    z-index: 12;
`;

export const BGImageContainer = styled.div`
    width: 81%;
    margin: 0 auto;
    padding: 10px 15px;
    background: transparent;
    border: 1px solid turquoise;
`;

export const BGImageContainerWide = styled.div`
    height: 1300px;
    width: auto;
    background-size: cover;
    display: block;
    width: 100%;
    background: transparent;
    position: absolute;
    top: 0px;
    left: 0px;
    img {
        height: 1300px;
        width: auto;
        background-size: cover;
        display: block;
        width: 100%;
    }
`;

export const AboutText = styled.div`
    background: black;
    color: white;
    padding: 5px;
`;

export const TechSpecs = styled.div`
    top: 100px;
    left: 0px;
    position: absolute;
    z-index: 200;
    position: absolute;
    z-index: 100000001;
    top: 304px;
    color: white;
    background: black;
    padding: 0px 10px 2px 10px;
    left: 60px;
    font-size: 25px;
    max-width: 200px
    &.ml-link {
        top: 223px;
        right: 228px;
        left: auto;
    }
    &.climate-link {
        top: 477px;
        max-width: 200px;
        width: auto;
        word-wrap: break-word;
    }
`;

export const AboutContainer = styled.div`
    background: #000000;
    padding: 20px;
    border: 1px solid deeppink;
`;