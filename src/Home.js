import React from 'react';
import Container from '@material-ui/core/Container';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


import emailjs from 'emailjs-com';

function Home(props){
    const [open, setOpen] = React.useState(false);
    const linkStyles = {
        color: '#388e3c',
    }
    const timeVariables = {
        
        // "--animate-duration": "2000ms",
        // "--animate-delay": "1.3s"
    }
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
        <Container>
            <h2 style={timeVariables}>
                <span><AccountBoxRoundedIcon /></span>
                <div className="text-center">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <span>I'm a full stack developer and recent graduate from <a href="#" className="text-decoration-none" style={linkStyles}>Al Akhawayn University in Ifrane</a> with a B.Sc in Computer Sciences</span>
                    <br />
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <span>Currently, I'm working on <a href="#" className="text-decoration-none">personal projects</a> and looking for a project to pour my passion into !</span>
                    <br />
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <span>To contact me, send me a mail through <a href="#" onClick={handleClickOpen} className="text-decoration-none text-danger" >Here !</a></span>
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
            </h2>
        </Container>
    );
}

export default Home;