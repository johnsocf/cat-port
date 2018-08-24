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
  ProjAnimTitle,
  WorkBlock,
  SeeDetail,
  BoldTag,
  BoldSimpleTag,
  BoldTagUnderline,
  TitleContainer,
  BGImageContainer,
  AboutText,
  TechSpecs,
  AboutContainer,
  BGImageContainerWide
} from './Projects.style';
import { Container, Relative, Flex,
    OutlineContainer } from '../../theme/grid';
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
      testText: '',
      modalImagePath: 'true',
      className: '',
      techSpecs: ''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    }

    handleSignIn = values => {
        console.log(values);
        fire.database().ref('messages').push( values );
    };

    openModal(event, testText, modalImagePath, className, techSpecs) {
        console.log('modal image path', modalImagePath);
        this.setState({modalIsOpen: true, testText: testText, modalImagePath: modalImagePath, className: className, techSpecs: techSpecs});
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
        let imagePath = this.state.modalImagePath;
        let image;
        if (imagePath == 'understood') {
            image =  <img onClick={(evt)=>this.closeModal()} src={require('../../assets/understood_port_1.png')}/>
        } else if (imagePath == 'aspen') {
            image =  <img onClick={(evt)=>this.closeModal()} src={require('../../assets/aspen_portfolio_set.png')}/>
        } else if (imagePath == 'flash-flood') {
            image =  <img onClick={(evt)=>this.closeModal()} src={require('../../assets/flash_flood_port_1.png')}/>
        } else if (imagePath == 'sports-labs') {
            image =  <img onClick={(evt)=>this.closeModal()} src={require('../../assets/sports_labs_port1.png')}/>
        } else if (imagePath == 'sierra') {
            image =  <img onClick={(evt)=>this.closeModal()} src={require('../../assets/sierra_d_port1.png')}/>
        } else if (imagePath == 'inntopia') {
            image =  <img onClick={(evt)=>this.closeModal()} src={require('../../assets/inntopia_port1.png')}/>
        } else if (imagePath == 'climate') {
            image =  <img onClick={(evt)=>this.closeModal()} src={require('../../assets/climate_set.png')}/>
        } else if (imagePath == 'machine') {
            image =  <img onClick={(evt)=>this.closeModal()} src={require('../../assets/ml_algo.png')}/>
        }
        return (
          <div>
            <Container>
                <Relative id="home">
                    <Parallax
                        className="vid-custom"
                        slowerScrollRate={false}
                        offsetYMax={10}
                        offsetYMin={-10}>
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
                        offsetYMax={0}
                        offsetYMin={-50}
                        slowerScrollRate={false}
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
                        className="parallax-class"
                        offsetYMax={80}
                        offsetYMin={-160}
                        slowerScrollRate={true}
                        tag="figure"
                    >
                        <OffsetImageContainer id="test">
                            <img src={require('../../assets/stencil2.png')}></img>
                        </OffsetImageContainer>
                    </Parallax>
                    <Parallax
                        className="custom-eng-class"
                        offsetYMax={20}
                        offsetYMin={-20}
                        slowerScrollRate={false}
                        tag="figure"
                    >
                        <TagLineContainerJobTitle id="test">
                            <h2>Front End Engineer</h2>
                        </TagLineContainerJobTitle>
                    </Parallax>
                </Relative>
                <br/>
                <br/>
                <br/>
            </Container>
                <Relative id="resume">

                    <BGImageContainerWide className="mtn-image">

                    </BGImageContainerWide>
                    <Container>
                        <Relative>
                            <div className="nav-line-up-block"></div>
                            <Parallax
                                className="title-container"
                                offsetYMax={30}
                                offsetYMin={-20}
                                slowerScrollRate={true}
                                tag="figure"
                            >
                                <TitleContainer>
                                    <img src={require('../../assets/resume_tag.png')}/>
                                </TitleContainer>


                            </Parallax>
                            <div className="nav-line-up-block-small"></div>
                            <Parallax
                                className="custom-class"
                                offsetYMax={20}
                                offsetYMin={-20}
                                slowerScrollRate={true}
                                tag="figure"
                            >
                                <BoldSimpleTag><a href="https://github.com/johnsocf" target="_blank">Find me on Github at: https://github.com/johnsocf</a></BoldSimpleTag>
                                <BoldSimpleTag><a href="http://linkedin.com/" target="_blank">Or on linkedin at: http://linkedin.com/</a></BoldSimpleTag>
                            </Parallax>
                            <Parallax
                                className="main-container"
                                offsetYMax={0}
                                offsetYMin={-22}
                                slowerScrollRate={false}
                                tag="figure"
                            >
                                <BGImageContainer>
                                    <img src={require('../../assets/resume_2.jpg')}/>
                                </BGImageContainer>
                            </Parallax>
                        </Relative>
                    </Container>
                </Relative>
            <Container>

                <div id="work">
                    <div className="nav-line-up-block"></div>
                    <OutlineContainer>
                        <Parallax
                            className="title-container"
                            offsetYMax={20}
                            offsetYMin={-20}
                            slowerScrollRate={true}
                            tag="figure"
                        >
                            <TitleContainer>
                                <img src={require('../../assets/projects_tag.png')}/>
                            </TitleContainer>

                        </Parallax>
                        <Parallax
                            className="custom-class"
                            offsetYMax={0}
                            offsetYMin={0}
                            slowerScrollRate={false}
                            tag="figure"
                        >
                            <div className="nav-line-up-block-small"></div>
                            <BoldTag>It's the work that matters.</BoldTag>
                            <BoldTag>Some client work that I have been a key part in developing:</BoldTag>
                        </Parallax>
                        <Parallax
                            className="main-container"
                            offsetYMax={0}
                            offsetYMin={-10}
                            slowerScrollRate={false}
                            tag="figure"
                        >
                            <WorkBlock>

                                <Flex marginBottom="50px" justify={'center'}>
                                    {/*<img onClick={this.openModal} src={require('../../assets/aspen-desktop.jpeg')}/>*/}
                                    <ProjContainer className="proj-container">
                                        <Relative marginTop="0px" marginBottom="0px">
                                            <Index className="understood">
                                                <h1>ASPEN</h1>
                                            </Index>
                                        </Relative>
                                        <ProjAnimTitle className="anim-title">Aspen Snowmass</ProjAnimTitle>
                                        <Zoomy
                                            imageUrl={require('../../assets/aspen_desktop.png')}
                                            renderThumbnail={({ showImage }) =>
                                        <ImageButton className="understood-content" onClick={(evt)=>this.openModal(evt, 'https://www.aspensnowmass.com', 'aspen', '', 'Vanilla JS with jQuery')}>
                                          <img
                                            src={require('../../assets/aspen_desktop.png')}
                                            alt="mountain"/>

                                          <Overlay className="overlay"></Overlay>
                                          <SeeDetail className="see-detail">SEE DETAILS</SeeDetail>
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
                                        <Relative marginTop="0px" marginBottom="0px">
                                            <Index className="understood">
                                                <h1>UNDERS<span>TOOD.org</span></h1>
                                            </Index>
                                        </Relative>

                                        <ProjAnimTitle className="anim-title">Understood.org</ProjAnimTitle>
                                        <Zoomy
                                            imageUrl={require('../../assets/understood_port_1.png')}
                                            renderThumbnail={({ showImage }) =>
                                        <ImageButton className="understood-content" onClick={(evt)=>this.openModal(evt, 'https://www.understood.org', 'understood', 'understood-link', 'Vanilla JS with jQuery')}>
                                          <img
                                            src={require('../../assets/understood_desktop.png')}
                                            alt="mountain"/>

                                          <Overlay className="overlay"></Overlay>
                                          <SeeDetail className="see-detail">SEE DETAILS</SeeDetail>
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
                            </WorkBlock>
                            <WorkBlock>

                                <Flex marginBottom="50px" justify={'center'}>
                                    {/*<img onClick={this.openModal} src={require('../../assets/aspen-desktop.jpeg')}/>*/}
                                    <ProjContainer>
                                        <Relative marginTop="0px" marginBottom="0px">
                                            <Index className="understood">
                                                <h1>SIERRA D<span>ESIGNS</span></h1>
                                            </Index>
                                        </Relative>
                                        <ProjAnimTitle className="anim-title">Sierra Designs</ProjAnimTitle>
                                        <Zoomy
                                            imageUrl={require('../../assets/aspen_desktop.png')}
                                            renderThumbnail={({ showImage }) =>
                                        <ImageButton className="understood-content" onClick={(evt)=>this.openModal(evt, 'https://www.sierradesigns.com', 'sierra', '', 'Vanilla JS with jQuery')}>
                                          <img
                                            src={require('../../assets/sierra_designs_desktop.png')}
                                            alt="mountain"/>

                                          <Overlay className="overlay"></Overlay>
                                          <SeeDetail className="see-detail">SEE DETAILS</SeeDetail>
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
                                        <Relative marginTop="0px" marginBottom="0px">
                                            <Index className="understood">
                                                <h1>INNTOPIA</h1>
                                            </Index>
                                        </Relative>

                                        <ProjAnimTitle className="anim-title">Inntopia CMS</ProjAnimTitle>
                                        <Zoomy
                                            imageUrl={require('../../assets/inntopia_port1.png')}
                                            renderThumbnail={({ showImage }) =>
                                        <ImageButton className="understood-content" onClick={(evt)=>this.openModal(evt, 'https://www.inntopia.com', 'inntopia', '', 'AngularJS, Angular, Typescript, ngRx')}>
                                          <img
                                            src={require('../../assets/inntopia_desktop.png')}
                                            alt="mountain"/>

                                          <Overlay className="overlay"></Overlay>
                                          <SeeDetail className="see-detail">SEE DETAILS</SeeDetail>
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
                            </WorkBlock>
                            <WorkBlock>

                                <Flex marginBottom="50px" justify={'center'}>
                                    {/*<img onClick={this.openModal} src={require('../../assets/aspen-desktop.jpeg')}/>*/}

                                    <ProjContainer>
                                        <Relative marginTop="0px" marginBottom="0px">
                                            <Index className="understood">
                                                <h1>SPORTS L<span>ABS</span></h1>
                                            </Index>
                                        </Relative>

                                        <ProjAnimTitle className="anim-title">Sports Labs</ProjAnimTitle>
                                        <Zoomy
                                            imageUrl={require('../../assets/understood_port_1.png')}
                                            renderThumbnail={({ showImage }) =>
                                        <ImageButton className="understood-content" onClick={(evt)=>this.openModal(evt, 'https://www.wyo.org', 'sports-labs', '', 'Vanilla JS with jQuery')}>
                                          <img
                                            src={require('../../assets/sports_labs_desktop.png')}
                                            alt="mountain"/>

                                          <Overlay className="overlay"></Overlay>
                                          <SeeDetail className="see-detail">SEE DETAILS</SeeDetail>
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
                                        <Relative marginTop="0px" marginBottom="0px">
                                            <Index className="understood">
                                                <h1>FLASH F<span>LOOD</span></h1>
                                            </Index>
                                        </Relative>

                                        <ProjAnimTitle className="anim-title">Flash Flood for Good</ProjAnimTitle>
                                        <Zoomy
                                            imageUrl={require('../../assets/understood_port_1.png')}
                                            renderThumbnail={({ showImage }) =>
                                        <ImageButton className="understood-content" onClick={(evt)=>this.openModal(evt, '', 'flash-flood', '', 'Vanilla JS with jQuery and Canvas')}>
                                          <img
                                            src={require('../../assets/flash_flood_desktop.png')}
                                            alt="mountain"/>

                                          <Overlay className="overlay"></Overlay>
                                          <SeeDetail className="see-detail">SEE DETAILS</SeeDetail>
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
                            </WorkBlock>
                            <WorkBlock>
                                <BoldTag>Personal Project: </BoldTag>
                                <BoldTag>Side projects that I build.:</BoldTag>
                                <Flex marginBottom="50px" justify={'center'}>
                                    <ProjContainer className="climate">
                                        <Relative marginTop="0px" marginBottom="0px">
                                            <Index className="understood">
                                                <h1>CLIMATE I<span className="ind">ndicators</span></h1>
                                            </Index>
                                        </Relative>

                                        <ProjAnimTitle className="anim-title">Climate Indicators</ProjAnimTitle>
                                        <Zoomy
                                            imageUrl={require('../../assets/understood_port_1.png')}
                                            renderThumbnail={({ showImage }) =>
                                        <ImageButton className="understood-content" onClick={(evt)=>this.openModal(evt, 'https://johnsocf.github.io/data-vis/', 'climate', 'climate-link', 'Angular 5 JS with ngRx and D3.js')}>
                                          <img
                                            src={require('../../assets/climate_desktop.png')}
                                            alt="mountain"/>

                                          <Overlay className="overlay"></Overlay>
                                          <SeeDetail className="see-detail">SEE DETAILS</SeeDetail>
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
                                    <ProjContainer className="climate">
                                        <Relative marginTop="0px" marginBottom="0px">
                                            <Index className="understood">
                                                <h1>MACHINE L<span className="ind">earning</span></h1>
                                            </Index>
                                        </Relative>

                                        <ProjAnimTitle className="anim-title">Algorithms in Machine Learning</ProjAnimTitle>
                                        <Zoomy
                                            imageUrl={require('../../assets/understood_port_1.png')}
                                            renderThumbnail={({ showImage }) =>
                                        <ImageButton className="understood-content" onClick={(evt)=>this.openModal(evt, 'https://github.com/johnsocf/ml', 'machine', 'ml-link', 'C++ investigation into developing Machine Learning Algorithms from scratch.')}>
                                          <img
                                            src={require('../../assets/machine_learning.png')}
                                            alt="mountain"/>

                                          <Overlay className="overlay"></Overlay>
                                          <SeeDetail className="see-detail">SEE DETAILS</SeeDetail>
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
                            </WorkBlock>

                        </Parallax>
                    </OutlineContainer>

                </div>
                <Relative id="about">
                    <div className="nav-line-up-block"></div>
                    <Parallax
                        className="title-container"
                        offsetYMax={10}
                        offsetYMin={0}
                        slowerScrollRate={false}
                        tag="figure"
                    >
                        <TitleContainer>
                            <img src={require('../../assets/about.png')}/>
                        </TitleContainer>
                    </Parallax>
                    <div className="nav-line-up-block-small"></div>
                    <Parallax
                        className="main-container"
                        offsetYMax={0}
                        offsetYMin={-25}
                        slowerScrollRate={false}
                        tag="figure"
                    >
                        <AboutContainer>
                            <AboutText>Hi there!  I'm Cat.</AboutText>
                            <AboutText>I am a Front End Software Engineer, currently based in Boulder, Colorado.</AboutText>
                            <AboutText>I originated in Washington, D.C.</AboutText>
                            <AboutText>I am also student in the CU Engineering Post-Baac Online Computer Science Program.</AboutText>
                            <AboutText>My scholastic focus is on Software Engineering and Machine Learning.</AboutText>
                            <AboutText>My current career focus also includes more specifically... all things JS, as well!  I particularly love working in Angular and React.</AboutText>
                            <AboutText>I work full time as a developer at a software development shop called Mapleton Hill in Boulder, and enjoy commuting by bicycle, daily.</AboutText>

                            <AboutText>My initial majors from CU Boulder were in Environmental Studies with an emphasis in Politics, Policy, and Decision Making and Studio Art with an emphasis in Motion Design and Photography.</AboutText>
                            <AboutText>Those subjects continue to be prominant interests and hobbies of mine.</AboutText>
                            <AboutText>I love the company of Dakota, my husky/malamute blue eyed wonder 'marshmellow wolf' mix of exuberant joy.</AboutText>
                            <AboutText>As well as riding my bike daily up the hilly climbs that surround Boulder;  Hiking, and trail running as my lifestyle allows.</AboutText>
                            <AboutText>Feel free to drop me a line in the form below if you'd like to chat, further!</AboutText>
                            <AboutText>Thanks for stopping by!</AboutText>
                        </AboutContainer>

                    </Parallax>

                </Relative>
                <Relative id="contact">
                    <div className="nav-line-up-block"></div>
                    <Parallax
                        className="contact-image"
                        offsetYMax={220}
                        offsetYMin={0}
                        slowerScrollRate={false}
                        tag="figure"
                    >
                        <BackgroundContactImage>
                            <img src={require('../../assets/mtns.png')}/>
                        </BackgroundContactImage>
                    </Parallax>
                    <Parallax
                        className="title-container contact-container"
                        offsetYMax={0}
                        offsetYMin={-20}
                        slowerScrollRate={true}
                        tag="figure"
                    >
                        <Container>
                            <TitleContainer>
                                <img src={require('../../assets/contact_tag.png')}/>
                            </TitleContainer>
                            <SignInForm onSubmit={this.handleSignIn}/>
                        </Container>
                    </Parallax>

                </Relative>

            </Container>
            <Container>
              <BoldTag>This site was built in React by Cat Johnson 2018</BoldTag>
            </Container>



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
              <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              {image}
              <CloseModal onClick={(evt)=>this.closeModal()}>close modal</CloseModal>
              <TechSpecs className={this.state.className}>{this.state.techSpecs}</TechSpecs>
              <WebsiteTarget className={this.state.className} target="_blank" href={this.state.testText}>{this.state.testText}</WebsiteTarget>
            </Modal>

          </div>

        );
    }
}

export default Projects;