import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        background: '#FFFF',
    },
    toolbar: {
        color: 'black'
    }
});

class Dashboard extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" className={classes.title}>
                            Dashboard
                        </Typography>
                        <Button color="secondary" variant="contained">Post or manage jobs</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default (withStyles(styles)(Dashboard));
