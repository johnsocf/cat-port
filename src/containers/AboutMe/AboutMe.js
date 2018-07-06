import React, { Component } from 'react';
import {Container, Flex} from 'theme/grid';
import {Title, VideoContainer} from './AboutMe.style';
import ReactPlayer from 'react-player';
import {H2, P} from 'theme/types';


class AboutMe extends Component {
  render() {
    return (
    <Container>
      <Title>about me</Title>
      <H2 align="right">check out this vid!</H2>
      <Flex>
        <P align="center">test center</P>
        <VideoContainer>
          <ReactPlayer
            controls="true"
            url={require('../../assets/birds_flying.mp4')}>
          </ReactPlayer>
        </VideoContainer>
      </Flex>
    </Container>
    );
  }
}

export default AboutMe;
