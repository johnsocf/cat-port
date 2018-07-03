import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
  ImageButton
} from './Projects.style';
import { Container } from 'theme/grid';

class Projects extends Component {
  render() {
    return (
      <Container>
        <Zoomy
          imageUrl={require('../../assets/cat_profile.jpg')}
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