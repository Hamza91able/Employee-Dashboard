import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MessageIcon from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

//Util
import firebase from '../util/firebase';
import swal from 'sweetalert';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(5),
    },
    menuIcon: {
        marginRight: 10,
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        background: '#2E3B55',
    }
});

class Appbar extends React.Component {

    state = {
        email: null,
        setAnchorEl: null
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    email: firebase.auth().currentUser.email,
                })
            } else {
                //Do nothing
            }
        });
    }

    handleClick = event => {
        this.setState({
            setAnchorEl: true,
        })
    }

    handleClose = () => {
        this.setState({
            setAnchorEl: null,
        })
    }

    logout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            swal("Logout Succesful");
        }).catch(error => {
            // An error happened.
            swal(`${error}`);
        });
    }

    render() {
        const { classes } = this.props;
        const { email, setAnchorEl } = this.state;

        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar} position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Management System
                        </Typography>
                        {email && <Button edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.handleClick}>
                            <MessageIcon className={classes.menuIcon} />
                            {email}
                        </Button>}
                        <Menu
                            anchorEl={setAnchorEl}
                            getContentAnchorEl={null}
                            id="simple-menu" 
                            keepMounted
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={setAnchorEl}
                            onClose={this.handleClose}
                            style={{ position: 'absolute' }}
                        >
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            <MenuItem onClick={this.logout}>Logout</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default (withStyles(useStyles)(Appbar));
