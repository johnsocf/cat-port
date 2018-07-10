import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
  ImageButton,
  Index,
  ImageContainer,
  ProjectTitle,
  OffsetImageContainer,
  TagLineContainer,
  Title
} from './Projects.style';
import { Container, Relative, Flex } from '../../theme/grid';
import {A} from '../../theme/types';
import ParallaxImage from 'react-image-parallax2';
import Modal from 'react-modal';
import './Project.style.css';

import {VideoContainer, StyledPlayButton} from '../AboutMe/AboutMe.style';
import ReactPlayer from 'react-player';
import { Parallax } from 'react-scroll-parallax';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zIndex                : '1000'
  }
};


Modal.setAppElement('body');


class Projects extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      testText: ''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(event, testText) {
    console.log('test', testText);
    this.setState({modalIsOpen: true, testText: testText});
    //this.setState({currentText: testText});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <Container id="main">
        <Parallax
          className="vid-custom"
          slowerScrollRate="true"
          offsetYMax={-20}
          offsetYMin={120}>
          <VideoContainer>
            {/*<StyledPlayButton*/}
            {/*/>*/}
            <ReactPlayer
              loop
              playing
              height="auto"
              width="100%"
              url={require('../../assets/birds_flying.mp4')}>
            </ReactPlayer>
          </VideoContainer>
        </Parallax>
        <Parallax
          className="custom-class"
          offsetYMax={20}
          offsetYMin={-20}
          slowerScrollRate="false"
          tag="figure"
        >
          <ParallaxImage reduceHeight={1/5} src={require('../../assets/sky.jpg')}></ParallaxImage>
        </Parallax>
        <Parallax
          className="custom-class"
          offsetYMax={160}
          offsetYMin={-160}
          slowerScrollRate
          tag="figure"
        >
          <OffsetImageContainer id="test">
            <ParallaxImage reduceHeight={1/115} src={require('../../assets/stencil.png')}></ParallaxImage>
          </OffsetImageContainer>
        </Parallax>
        <Parallax
          className="custom-class"
          offsetYMax={20}
          offsetYMin={-20}
          slowerScrollRate="false"
          tag="figure"
        >
          <TagLineContainer id="test">
            <h2>Front End Developer</h2>
          </TagLineContainer>
        </Parallax>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Title>Projects</Title>
        <div id="work">
          <Relative marginTop="50px" marginBottom="50px">
            <Index>
              <h1>01</h1>
            </Index>
            <h1><A href="cnn.com">pic title</A></h1>
          </Relative>
          <Flex marginBottom="50px" justify={'center'}>
            {/*<img onClick={this.openModal} src={require('../../assets/everest.jpeg')}/>*/}
            <Zoomy
              imageUrl={require('../../assets/everest.jpeg')}
              renderThumbnail={({ showImage }) =>
                <ImageButton onClick={(evt)=>this.openModal(evt, 'test')}>
                  <img
                    src={require('../../assets/everest.jpeg')}
                    alt="mountain"/>
                  <ProjectTitle>Project</ProjectTitle>
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
        </div>
        {/*<Relative marginBottom="100px">*/}
          {/*<OffsetImageContainer id="test">*/}
            {/*<ParallaxImage reduceHeight={1/10} src={require('../../assets/stencil.png')}></ParallaxImage>*/}
          {/*</OffsetImageContainer>*/}
          {/*<ImageContainer id="test">*/}
            {/*<ParallaxImage reduceHeight={1/3} src={require('../../assets/sky.jpg')}></ParallaxImage>*/}
          {/*</ImageContainer>*/}
        {/*</Relative>*/}
        {/*<br/>*/}
        {/*<br/>*/}
        {/*<br/>*/}
        {/*<br/>*/}
        {/*<br/>*/}
        {/*<br/>*/}
        {/*<br/>*/}
        {/*<br/>*/}
        {/*<br/>*/}

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
          <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src={require('../../assets/cat_profile.jpg')}/>
          <button>{this.state.testText}</button>
        </Modal>
      </Container>

    );
  }
}

export default Projects;