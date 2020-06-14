import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from '@material-ui/core/Button';

import AOS from 'aos';

import plant from './img/plant_over.jpg';
import items from './items/items.json';

let rootStyles = {
    marginBottom: '2.5em'
}
const lastRootStyles = {
    marginBottom: '0'
}
const contentStyles = {
    flex: '0 1 auto',
}
const textStyles = {
    marginTop: '1em',
}
const pictureSizing = {
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
}
let fadeAnimation = "";
let headerSection = {
    textAlign: 'center',
    borderBottom: 'grey 2px solid',
    borderRadius: '1px',
    marginBottom: '1rem',
    // padding: '1em',
}

const experiences = items.experience;

class Experience extends React.Component {
    componentDidMount(){
        AOS.init()
    }
    render(){
        return(
            <Container>
                <Typography class="display-4" style={headerSection}>My Experience</Typography>

                {experiences.map((item, index) => {
                    if(index === experiences.length - 1)
                        rootStyles = lastRootStyles;
                    if(index % 2 === 0)
                        fadeAnimation = "fade-right";
                    else
                        fadeAnimation = "fade-left"
                    
                    return(
                        <Card data-aos={fadeAnimation} data-aos-duration={"1500"} style={rootStyles} key={item.id}>
                            <Row>
                                <Col xs={6} md={4} style={pictureSizing}>
                                    <Image src={plant} fluid/>
                                </Col>
                                <Col>
                                    <CardContent style={contentStyles}>
                                            <Typography component="h5" variant="h5">
                                                {item.title}
                                            </Typography>
                                            <Typography component="sub" variant="subtitle2">
                                                {item.dates}
                                            </Typography>
                                        
                                            <p className="lead" style={textStyles}>
                                                {item.desc}
                                            </p>
                                            <Button size="small" color="primary" href={item.link}>
                                                LINK
                                            </Button>
                                    </CardContent>
                                </Col>
                            </Row>
                        </Card>
                    );
                })}
            </Container>
        );
    }
}

export default Experience;