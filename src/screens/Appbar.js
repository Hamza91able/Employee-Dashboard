import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MessageIcon from '@material-ui/icons/Message';

const useStyles = makeStyles(theme => ({
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
        background : '#2E3B55',
    }
}));

export default function Appbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Management System
                    </Typography>
                    {/* <Button edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MessageIcon className={classes.menuIcon} />
                        Message Centre
                    </Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}