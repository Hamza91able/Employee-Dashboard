import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import Table from './Table';


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
    },
    grid: {
        marginTop: 20,
        width: "unset",
        flexShrink: 0,
    },
    table: {
        marginTop: theme.spacing(10),
    },
    card: {
        minWidth: 200,
        height: 250
    },
    roundCircle: {
        border: '0.1em solid #32CD32',
        borderRadius: 60,
        height: 100,
        width: 100,
        textAlign: 'center',
        background: '#32CD32',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    r2: {
        marginTop: theme.spacing(2.5),
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'sans - serif',
        color: 'white',
    },
    rowC: {
        display: 'flex',
        flexDirection: 'row',
    },
    heading: {
        textAlign: 'center',
        marginTop: 10,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Dashboard extends React.Component {

    state = {
        selection: 'Vacant Shifts - Current'
    }

    changeSelection = shift => {
        const { changeSelectedOptionTable } = this.props;

        this.setState({
            selectiom: shift
        }, () => {
            changeSelectedOptionTable(shift);
        })
    }

    renderCurrent = () => {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Grid container xs={12} sm={8} className={classes.grid}>
                    <Card className={classes.card}>
                        <Typography className={classes.heading} variant="h5" component="h2">
                            Current
                        </Typography>
                        <CardContent className={classes.rowC}>
                            <Typography className={classes.roundCircle}>
                                <Typography className={classes.r2}>
                                    12
                                </Typography>
                                <Button onClick={() => this.changeSelection('Vacant Shifts - Current')} color='primary' style={{ marginTop: 30 }}>
                                    Vacant Shifts
                                </Button>
                            </Typography>
                            <Typography className={classes.roundCircle} style={{ border: '0.1em solid #CCCC00', background: '#CCCC00' }}>
                                <Typography className={classes.r2}>
                                    5
                                </Typography>
                                <Button onClick={() => this.changeSelection('Filled Shifts - Current')} color='primary' style={{ marginTop: 30 }}>
                                    Filled Shifts
                                </Button>
                            </Typography>
                            <Typography className={classes.roundCircle} style={{ border: '0.1em solid #CD5C5C', background: '#CD5C5C' }}>
                                <Typography className={classes.r2}>
                                    3
                                </Typography>
                                <Button onClick={() => this.changeSelection('Unfilled Shifts - Current')} color='primary' style={{ marginTop: 30 }}>
                                    Unfilled Shifts
                                </Button>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </React.Fragment>
        )
    }

    renderHistoric = () => {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Grid container xs={12} sm={8} className={classes.grid}>
                    <Card className={classes.card}>
                        <Typography className={classes.heading} variant="h5" component="h2">
                            Historic
                        </Typography>
                        <CardContent className={classes.rowC}>
                            <Typography className={classes.roundCircle}>
                                <Typography className={classes.r2}>
                                    147
                                </Typography>
                                <Button onClick={() => this.changeSelection('Vacant Shifts - Historic')} color='primary' style={{ marginTop: 30 }}>
                                    Vacant Shifts
                                </Button>
                            </Typography>
                            <Typography className={classes.roundCircle} style={{ border: '0.1em solid #CCCC00', background: '#CCCC00' }}>
                                <Typography className={classes.r2}>
                                    136
                                </Typography>
                                <Button onClick={() => this.changeSelection('Filled Shifts - Historic')} color='primary' style={{ marginTop: 30 }}>
                                    Filled Shifts
                                </Button>
                            </Typography>
                            <Typography className={classes.roundCircle} style={{ border: '0.1em solid #CD5C5C', background: '#CD5C5C' }}>
                                <Typography className={classes.r2}>
                                    9
                                </Typography>
                                <Button onClick={() => this.changeSelection('Unfilled Shifts - Historic')} color='primary' style={{ marginTop: 30 }}>
                                    Unfilled Shifts
                                </Button>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </React.Fragment>
        )
    }

    render() {
        const { classes, selectedOptionTable={selectedOptionTable} } = this.props;

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

                <Grid container spacing={3}>
                    <Grid container justify="center" xs={12} sm={6}>
                        {this.renderCurrent()}
                    </Grid>
                    <Grid container justify="center" xs={12} sm={6}>
                        {this.renderHistoric()}
                    </Grid>
                </Grid>

                <Grid item xs={12} className={classes.table}>
                    <Table selectedOptionTable={selectedOptionTable}/>
                </Grid>

            </div>
        );
    }
}

export default (withStyles(styles)(Dashboard));
