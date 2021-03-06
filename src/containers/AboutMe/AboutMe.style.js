import styled from 'styled-components';
import {magenta} from '../../theme/variables';
import {Relative} from '../../theme/grid';
import PlayButton from '../PlayBtn/PlayBtn';

export const Title = styled.h1`
 margin-top: 0;
 color: ${magenta};
`;

export const VideoContainer = styled(Relative)`
    width: 100%;
    flex-shrink: 0;
    flex-grow: 0;
    cursor: pointer;
    justify-content: center;
    align-items: center;
`;

export const StyledPlayButton = styled(PlayButton)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity .3s;
  ${({playing})=> playing && `
      opacity: 0;
  `}
`;