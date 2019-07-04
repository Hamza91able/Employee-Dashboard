import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// Screens
import Dashboard from './Dashboard';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        marginTop: 4,
    },
    appBar: {
        background: '#1E90FF',
    }
}));

export default function SimpleTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Dashboard" />
                    <Tab label="Account Management" />
                    <Tab label="User Management" />
                    <Tab label="Site Management" />
                    <Tab label="Dept Management" />
                    <Tab label="Billing" />
                    <Tab label="Favourites" />
                </Tabs>
            </AppBar>
            {value === 0 && <TabContainer><Dashboard changeSelectedOptionTable={props.changeSelectedOptionTable} selectedOptionTable={props.selectedOptionTable} /></TabContainer>}
            {value === 1 && <TabContainer>Item Two</TabContainer>}
            {value === 2 && <TabContainer>Item Three</TabContainer>}
            {value === 3 && <TabContainer>Item Four</TabContainer>}
            {value === 4 && <TabContainer>Item Five</TabContainer>}
            {value === 5 && <TabContainer>Item Six</TabContainer>}
            {value === 6 && <TabContainer>Item Seven</TabContainer>}
        </div>
    );
}