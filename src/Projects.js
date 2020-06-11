import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Image from 'react-bootstrap/Image';
import Container from '@material-ui/core/Container';
import AOS from 'aos';

import project from './img/flower_over.jpg';
import php from './img/php.ico';
import laravel from './img/laravel.svg';
import bs from './img/bs.svg';
import css from './img/css.ico';
import html from './img/html.ico';
import js from './img/js.svg';
import py from './img/py.ico'; 
import react from './img/react.svg';
import sy from './img/sy.ico';

import items from './items/items.json';

const projects = items.projects;
    const root = {
        paddingBottom: '0px',
    }

    const pictureSizing = {
        padding: '0',
        maxHeight: '100%',
        maxWidth: '100%',
      }

    const cardStyles = {
        marginBottom: '1em',
    }

    let appearAnimation = "flip-left"
    // Math.floor(Math.random() * 10)

class Projects extends React.Component{
    componentDidMount(){
        AOS.init();
    }
    render(){
        if(Math.floor(Math.random() * 10) % 2 === 0)
            appearAnimation = "flip-right";
        else
            appearAnimation = "flip-left";
        return(
            <CardColumns style={root}>
                {projects.map( item => {
                    return (
                        <Card style={cardStyles} key={item.id} data-aos={appearAnimation} data-aos-duration={(Math.floor(Math.random()*2)+1) * 1000} data-aos-easing="ease-in-sine">
                            <CardActionArea>
                                <Container style={pictureSizing}>
                                    <Image src={project} fluid/>
                                </Container>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" align="justify">
                                        {item.desc}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                        <Button size="small" color="primary" href={item.link}>
                                            Github
                                        </Button>
                                        {item.tags.map( tag => {
                                            return(
                                                <div size="small" color="primary">
                                                    <Image src={
                                                        tag === 'js' ? js : 
                                                        tag === 'py' ? py :
                                                        tag === 'bs' ? bs :
                                                        tag === 'php' ? php :
                                                        tag === 'laravel' ? laravel :
                                                        tag === 'css' ? css :
                                                        tag === 'html' ? html :
                                                        tag === 'react' ? react :
                                                        tag === 'sy' ? sy :
                                                        null
                                                    }/>
                                                </div>
                                            )
                                        })}    
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    );
                })}
            </CardColumns>
        );
    }
}

export default Projects;