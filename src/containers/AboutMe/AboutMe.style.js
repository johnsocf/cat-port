import styled from 'styled-components';
import {magenta} from 'theme/variables';
import {Relative} from 'theme/grid';

export const Title = styled.h1`
 margin-top: 0;
 color: ${magenta};
`;

export const VideoContainer = styled(Relative)`
    width: 70%;
    flex-shrink: 0;
    flex-grow: 0;
`;