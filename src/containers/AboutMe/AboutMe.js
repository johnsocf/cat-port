import React, { Component } from 'react';
import {Container, Flex} from '../../theme/grid';
import {Title, VideoContainer, StyledPlayButton} from './AboutMe.style';
import ReactPlayer from 'react-player';
import {H2, P} from '../../theme/types';
import ToggleState from 'react-toggle-state';


class AboutMe extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     video1Hovering: false
  //   };
  //
  //   this.onMouseLeave = this.onMouseLeave.bind(this);
  //   this.onMouseOver = this.onMouseOver.bind(this);
  // }
  //
  // onMouseOver() {
  //   this.setState({
  //     video1Hovering: true
  //   });
  // }
  //
  // onMouseLeave() {
  //   this.setState({
  //     video1Hovering: false
  //   });
  // }

  render() {
    return (
    <Container>
      <Title>about me</Title>
      <H2 align="right">check out this vid!</H2>
      <Flex>
        <P align="center">test center</P>
        <ToggleState>
          {({isTrue: playing, turnTrue: startPlay, turnFalse: stopPlay})=>
            <ToggleState>
              {({isTrue: hovering, turnTrue: onMouseOver, turnFalse: onMouseLeave})=>
                <VideoContainer
                  // onMouseLeave={this.onMouseLeave}
                  // onMouseOver={this.onMouseOver}
                  onMouseLeave ={onMouseLeave}
                  onMouseOver ={onMouseOver}
                  onClick={playing ? stopPlay : startPlay}
                >
                  <StyledPlayButton
                    // hover={this.state.video1Hovering}
                    playing={playing}
                    hover={hovering}
                  />
                  <ReactPlayer
                    loop
                    playing={playing}

                    height="auto"
                    width="100%"
                    url={require('../../assets/birds_flying.mp4')}>
                  </ReactPlayer>
                </VideoContainer>
              }
            </ToggleState>
          }
        </ToggleState>

      </Flex>
    </Container>
    );
  }
}

export default AboutMe;
