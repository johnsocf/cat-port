import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
  ImageButton,
  Index,
  ImageContainer,
  Title
} from './Projects.style';
import { Container, Relative, Flex } from 'theme/grid';
import {A} from 'theme/types';
import ParallaxImage from 'react-image-parallax2';

class Projects extends Component {
  render() {
    return (
      <Container>
        <Title>Projects</Title>
        <Relative marginTop="50px" marginBottom="50px">
          <Index>
            <h1>01</h1>
          </Index>
          <h1><A href="cnn.com">pic title</A></h1>
        </Relative>
        <Flex marginBottom="50px" justify={'center'}>
          <Zoomy
            imageUrl={require('../../assets/everest.jpeg')}
            renderThumbnail={({ showImage }) =>
              <ImageButton onClick={showImage}>
                <img
                  src={require('../../assets/everest.jpeg')}
                  alt="mountain"/>
              </ImageButton>
            }
            scale={[1.1, 1.1]}
            imageProps={{
              style: {
                width: '100vw',
                height: 'auto'
              }
            }}
          />
        </Flex>
        <Relative marginBottom="100px">
          <Index>
            <h1>02</h1>
          </Index>
          <h1><A href="cnn.com">pic title parallax</A></h1>
        </Relative>
        <ImageContainer id="test">
          <ParallaxImage reduceHeight={1/3} src={require('../../assets/sky.jpg')}></ParallaxImage>
        </ImageContainer>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </Container>
    );
  }
}

export default Projects;