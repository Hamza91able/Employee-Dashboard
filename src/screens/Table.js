import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';



const useStyles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});

class SimpleTable extends React.Component {

    state = {
        selectedOption: 'Vacant Shifts - Current',
    }

    changeSelectedOption = shift => {
        this.setState({
            selectedOption: shift,
        })
    }

    render() {
        const { classes, selectedOptionTable, tableData } = this.props;

        return (
            <Paper className={classes.root}>
                <Toolbar>
                    <Typography variant="h6" id="tableTitle">
                        {selectedOptionTable}
                    </Typography>
                </Toolbar>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Job No</TableCell>
                            <TableCell>Site</TableCell>
                            <TableCell>Dept/Ward</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Manager</TableCell>
                            <TableCell>Cost</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {selectedOptionTable === 'Vacant Shifts - Current' ? tableData.map(row => (
                            <TableRow key={row.jobno}>
                                <TableCell component="th" scope="row">
                                    {row.JobNO}
                                </TableCell>
                                <TableCell>{row.Site}</TableCell>
                                <TableCell>{row.Dept}</TableCell>
                                <TableCell>{row.Desc}</TableCell>
                                <TableCell>{row.Manager}</TableCell>
                                <TableCell>{row.Cost}</TableCell>
                            </TableRow>
                        )) : selectedOptionTable === 'Filled Shifts - Current' ? tableData.map(row => (
                            <TableRow key={row.jobno}>
                                <TableCell component="th" scope="row">
                                    {row.jobNo}
                                </TableCell>
                                <TableCell>{row.site}</TableCell>
                                <TableCell>{row.dept}</TableCell>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell>{row.manager}</TableCell>
                                <TableCell>{row.cost}</TableCell>
                            </TableRow>
                        )) : selectedOptionTable === 'Unfilled Shifts - Current' ? tableData.map(row => (
                            <TableRow key={row.jobno}>
                                <TableCell component="th" scope="row">
                                    {row.jobNo}
                                </TableCell>
                                <TableCell>{row.site}</TableCell>
                                <TableCell>{row.dept}</TableCell>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell>{row.manager}</TableCell>
                                <TableCell>{row.cost}</TableCell>
                            </TableRow>
                        )) : selectedOptionTable === 'Vacant Shifts - Historic' ? tableData.map(row => (
                            <TableRow key={row.jobno}>
                                <TableCell component="th" scope="row">
                                    {row.jobNo}
                                </TableCell>
                                <TableCell>{row.site}</TableCell>
                                <TableCell>{row.dept}</TableCell>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell>{row.manager}</TableCell>
                                <TableCell>{row.cost}</TableCell>
                            </TableRow>
                        )) : selectedOptionTable === 'Filled Shifts - Historic' ? tableData.map(row => (
                            <TableRow key={row.jobno}>
                                <TableCell component="th" scope="row">
                                    {row.jobNo}
                                </TableCell>
                                <TableCell>{row.site}</TableCell>
                                <TableCell>{row.dept}</TableCell>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell>{row.manager}</TableCell>
                                <TableCell>{row.cost}</TableCell>
                            </TableRow>
                        )) : selectedOptionTable === 'Unfilled Shifts - Historic' ? tableData.map(row => (
                            <TableRow key={row.jobno}>
                                <TableCell component="th" scope="row">
                                    {row.jobNo}
                                </TableCell>
                                <TableCell>{row.site}</TableCell>
                                <TableCell>{row.dept}</TableCell>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell>{row.manager}</TableCell>
                                <TableCell>{row.cost}</TableCell>
                            </TableRow>
                        )) : null}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default (withStyles(useStyles)(SimpleTable));
