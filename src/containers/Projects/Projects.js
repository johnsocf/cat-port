import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
  ImageButton
} from './Projects.style';
import { Container } from 'theme/grid';
import {A} from 'theme/types';

class Projects extends Component {
  render() {
    return (
      <Container>
        <h1><A href="cnn.com">pic title</A></h1>
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
      </Container>
    );
  }
}

export default Projects;