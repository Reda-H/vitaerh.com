import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import AOS from 'aos';
import Container from '@material-ui/core/Container';
import Image from 'react-bootstrap/Image';
import profile from './img/profile_picture.JPG'
import Projects from './Projects';
import Home from './Home';
import Experience from './Experience';

import './App.css';
import { Typography } from '@material-ui/core';




const root = {
  backgroundColor: '#ecf0f1',
}

const InnerContainerStyles = {
  color: 'black',
  marginTop: '5em',
}

const JumbotronStyles = {
  background: 'transparent',
  minHeight: '675px',
  margin: 0,
}

const JumbotronStylesSecondary = {
  background: 'transparent',
  minHeight: '600px',
  margin: 0,
  padding: 0
}


const pictureSizing = {
  maxHeight: '320px',
  maxWidth: '320px',
  overflow: 'hidden',
}

class App extends React.Component {

  componentDidMount() {
    AOS.init()
  }

  render(){
    return(
        <div style={root}>
          <Jumbotron fluid style={JumbotronStyles}>
            <Container style={InnerContainerStyles} className="w-50 mt-20">
              <h1 className="header">
                <Container style={pictureSizing}>
                  <Image src={profile} roundedCircle fluid/>
                </Container>
              </h1>
              <h1 className="header header-hi">
                <div className="animate__animated animate__fadeInDown">
                  <Typography variant="h2">
                    Hi, I'm Reda Herradi
                  </Typography>
                </div>
              </h1>
            </Container>
          </Jumbotron>
          <Jumbotron style={JumbotronStylesSecondary}>
              <Container style={InnerContainerStyles} data-aos={"fade-up"} data-aos-duration={"3000"}>
                <Home />
              </Container>
          </Jumbotron>
          <Jumbotron style={JumbotronStylesSecondary}>
            <Container style={InnerContainerStyles}>
              <Projects />
            </Container>
          </Jumbotron>
          <Jumbotron style={JumbotronStylesSecondary}>
            <Container style={InnerContainerStyles}>
              <Experience />            
            </Container>
          </Jumbotron>
        </div>
    );
  }
}

export default App;
