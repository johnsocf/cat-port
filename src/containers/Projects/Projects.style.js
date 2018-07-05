import styled from 'styled-components';
import {torquoise, pink} from 'theme/variables';

export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  height: 250px;
  width: 250px;

  & > img {
    transition: transform .3s;
  }

  &:hover {
    & > img {
      transform: scale(1.3);
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
`;