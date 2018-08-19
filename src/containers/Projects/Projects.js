import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
  ImageButton,
  Index,
  ImageContainer,
  ProjectTitle,
  OffsetImageContainer,
  TagLineContainerJobTitle,
  Title,
  Overlay,
  CloseModal,
  WebsiteTarget,
    ProjContainer,
  ProjAnimTitle
} from './Projects.style';
import { Container, Relative, Flex } from '../../theme/grid';
import {A, H2, P} from '../../theme/types';
import ParallaxImage from 'react-image-parallax2';
import Modal from 'react-modal';
import './Project.style.css';
import { reduxForm, Field } from 'redux-form';
import fire from '../../index';
import {BackgroundContactImage, ContactContainer} from '../ContactMe/ContactMe.style';


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


let SignInForm = props => {
    const { handleSubmit } = props;
    return <ContactContainer>
        <form onSubmit={handleSubmit} className="contact-me-form">
            <div className="field">
                <div className="control">
                    <Field name="firstName" component={renderField} type="text" label="First Name"/>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <Field name="lastName" component={renderField} type="text" label="Last Name"/>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <Field name="email" component={renderField} type="email" label="Email Address"/>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <label className="label">Message</label>
                    <Field className="textarea" name="message" component="textarea" />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>

        </form>
    </ContactContainer>;
};

const validate = val => {
    const errors = {};
    if (!val.firstName) {
        console.log('First Name is required');
        errors.firstName = 'Required';
    }
    if (!val.lastName) {
        console.log('Last Name is required');
        errors.lastName = 'Required';
    }
    if (!val.email) {
        console.log('email is required');
        errors.email = 'Required';
    } else if (!/^.+@.+$/i.test(val.email)) {
        console.log('email is invalid');
        errors.email = 'Invalid email address';
    }
    if (!val.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(val.age))) {
        errors.age = 'Must be a number'
    } else if (Number(val.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <div className="control">
            <label className="field">{label}</label>
            <input className="input" {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

SignInForm = reduxForm({
    form: 'signIn',
    validate,
})(SignInForm);



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

    handleSignIn = values => {
        console.log(values);
        fire.database().ref('messages').push( values );
    };

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
          <div>
            <Container>
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
                    <VideoContainer>
                        <ReactPlayer
                            loop
                            playing
                            height="auto"
                            width="100%"
                            url={require('../../assets/cover.mp4')}>
                        </ReactPlayer>
                    </VideoContainer>

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
                  <TagLineContainerJobTitle id="test">
                    <h2>Front End Engineer</h2>
                  </TagLineContainerJobTitle>
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
                      <h1>ASPEN</h1>
                    </Index>
                    <h1><A href="cnn.com">pic title</A></h1>
                  </Relative>
                  <Flex marginBottom="50px" justify={'center'}>
                    {/*<img onClick={this.openModal} src={require('../../assets/aspen-desktop.jpeg')}/>*/}
                    <ProjContainer>
                        <ProjAnimTitle className="anim-title">Aspen Snowmass Website</ProjAnimTitle>
                        <Zoomy
                            imageUrl={require('../../assets/aspen_desktop.png')}
                            renderThumbnail={({ showImage }) =>
                        <ImageButton onClick={(evt)=>this.openModal(evt, 'https://www.aspensnowmass.com/')}>
                          <img
                            src={require('../../assets/aspen_desktop.png')}
                            alt="mountain"/>

                          <Overlay className="overlay"></Overlay>
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
                    </ProjContainer>

                      <ProjContainer>
                          <ProjAnimTitle className="anim-title">Inntopia CMS</ProjAnimTitle>
                          <Zoomy
                              imageUrl={require('../../assets/aspen_desktop.png')}
                              renderThumbnail={({ showImage }) =>
                        <ImageButton onClick={(evt)=>this.openModal(evt, 'https://www.aspensnowmass.com/')}>
                          <img
                            src={require('../../assets/aspen_desktop.png')}
                            alt="mountain"/>

                          <Overlay className="overlay"></Overlay>
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
                      </ProjContainer>
                  </Flex>
                  <Relative marginBottom="100px">
                    <Index>
                      <h1>02</h1>
                    </Index>
                    <h1><A href="cnn.com">pic title parallax</A></h1>
                  </Relative>
                </div>
            </Container>
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
            <div id="contact">
                <Parallax
                    className="custom-class"
                    offsetYMax={220}
                    offsetYMin={-220}
                    slowerScrollRate="false"
                    tag="figure"
                >
                    <BackgroundContactImage>
                        <img src={require('../../assets/clouds_2.png')}/>
                    </BackgroundContactImage>
                </Parallax>
                <Parallax
                    className="custom-class"
                    offsetYMax={10}
                    offsetYMin={-10}
                    slowerScrollRate="true"
                    tag="figure"
                >
                    <Container>
                        <Title>Contact Me</Title>
                        <SignInForm onSubmit={this.handleSignIn}/>
                    </Container>
                </Parallax>

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

              <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >

              <img onClick={(evt)=>this.closeModal()} src={require('../../assets/aspen_portfolio_set.png')}/>
              <CloseModal onClick={(evt)=>this.closeModal()}>close modal</CloseModal>
              <WebsiteTarget target="_blank" href={this.state.testText}>{this.state.testText}</WebsiteTarget>
            </Modal>
          </div>

        );
    }
}

export default Projects;