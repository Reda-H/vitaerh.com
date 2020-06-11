import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import { LinkContainer } from 'react-router-bootstrap';
import { Typography } from '@material-ui/core';
// import ContactUs from './ContactUs';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function NavigationBar(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('default_service', 'normalcontact', e.target, 'user_Igj4Q3wy6ZXivExhrbhvn')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        setOpen(false);
      }
    return(
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#">
                <Typography variant="h4">
                    VRH
                </Typography>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home" className="md">
                    <LinkContainer to={{
                        pathname: "/home",
                    }} variant="btn btn-outline-light" onClick={props.handleClick}>
                        <Button>Home</Button>
                    </LinkContainer>
                </Nav.Link>
                <Nav.Link href="#features">
                    <LinkContainer to="/about" variant="btn btn-outline-light" onClick={props.handleClick}>
                        <Button>Projects</Button>
                    </LinkContainer>
                </Nav.Link>
                <Nav.Link href="#pricing ">
                    <LinkContainer to="/experience" variant="btn btn-outline-light" onClick={props.handleClick}>
                        <Button>Experience</Button>
                    </LinkContainer>
                </Nav.Link>
            </Nav>
            <div>
                <Button variant="btn btn-outline-danger" onClick={handleClickOpen}> 
                    Contact Me
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Contact Reda</DialogTitle>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <DialogContent>
                        <DialogContentText>
                            I see that you are interested in contacting me, I would be happy to answer you as soon as I can, 
                            please leave the following information for me to contact you back :)
                        </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Full Name"
                                type="text"
                                name="fromName"
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="contact"
                                label="Email Address"
                                type="email"
                                name="contactMail"
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="message"
                                label="Your Message"
                                type="text"
                                name="message"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} variant="btn btn-outline-dark" type="reset">
                                Close
                            </Button>
                            <Button onClick={handleClose} variant="btn btn-outline-dark" type="submit">
                                Send
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        </Navbar>
    );
}

export default NavigationBar;