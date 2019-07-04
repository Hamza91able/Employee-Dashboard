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
        vacantShiftsCurrent: [
            {
                jobNo: 'HCP102213',
                site: 'Bexley',
                dept: 'N/A',
                desc: 'RN - Palliative Care or General Nurse',
                manager: 'Belinda Cooper',
                cost: '278',
            },
            {
                jobNo: 'HCP102221',
                site: 'Islington',
                dept: 'Bariatric',
                desc: 'Health Care Assistant',
                manager: 'Mike Holmes',
                cost: '187',
            }
        ],
        filledShiftsCurrent: [
            {
                jobNo: 'HCP102213',
                site: 'TEST',
                dept: 'N/A',
                desc: 'RN - Palliative Care or General Nurse',
                manager: 'Belinda Cooper',
                cost: '278',
            },
            {
                jobNo: 'HCP102221',
                site: 'TEST',
                dept: 'Bariatric',
                desc: 'Health Care Assistant',
                manager: 'Mike Holmes',
                cost: '187',
            }
        ],
        unfilledShiftsCurrent: [
            {
                jobNo: 'HCP102213',
                site: 'Bexley',
                dept: 'TEST',
                desc: 'RN - Palliative Care or General Nurse',
                manager: 'Belinda Cooper',
                cost: '278',
            },
            {
                jobNo: 'HCP102221',
                site: 'Islington',
                dept: 'Bariatric',
                desc: 'Health Care Assistant',
                manager: 'Mike Holmes',
                cost: '200',
            }
        ],
        vacantShiftsHistoric: [
            {
                jobNo: 'HCP102213',
                site: 'Bexley',
                dept: 'N/A',
                desc: 'RN - Palliative Care or General Nurse',
                manager: 'Belinda Hilda',
                cost: '278',
            },
            {
                jobNo: 'HCP102221',
                site: 'Islington',
                dept: 'Bariatric',
                desc: 'Health Care Assistant',
                manager: 'Mike Holmes',
                cost: '187',
            }
        ],
        filledShiftsHistoric: [
            {
                jobNo: 'HCP102213',
                site: 'Bexley',
                dept: 'N/A',
                desc: 'RN - Palliative Care or General Nurse',
                manager: 'Belinda Cooper',
                cost: '278',
            },
            {
                jobNo: 'HCP102221',
                site: 'Islington',
                dept: 'Bariatric',
                desc: 'Health Care Assistant',
                manager: 'Mike TEST',
                cost: '187',
            }
        ],
        unfilledShiftsHistoric: [
            {
                jobNo: 'HCP102213',
                site: 'HAHA',
                dept: 'N/A',
                desc: 'RN - Palliative Care or General Nurse',
                manager: 'Belinda Cooper',
                cost: '278',
            },
            {
                jobNo: 'HCP102221',
                site: 'Islington',
                dept: 'Bariatric',
                desc: 'Health Care Assistant',
                manager: 'Mike Holmes',
                cost: '187',
            }
        ],
        selectedOption: 'Vacant Shifts - Current',
    }

    changeSelectedOption = shift => {
        this.setState({
            selectedOption: shift,
        })
    }

    render() {
        const { classes, selectedOptionTable } = this.props;
        const { vacantShiftsCurrent, filledShiftsCurrent, unfilledShiftsCurrent, vacantShiftsHistoric, filledShiftsHistoric, unfilledShiftsHistoric } = this.state;

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
                        {selectedOptionTable === 'Vacant Shifts - Current' ? vacantShiftsCurrent.map(row => (
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
                        )) : selectedOptionTable === 'Filled Shifts - Current' ? filledShiftsCurrent.map(row => (
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
                        )) : selectedOptionTable === 'Unfilled Shifts - Current' ? unfilledShiftsCurrent.map(row => (
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
                        )) : selectedOptionTable === 'Vacant Shifts - Historic' ? vacantShiftsHistoric.map(row => (
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
                        )): selectedOptionTable === 'Filled Shifts - Historic' ? filledShiftsHistoric.map(row => (
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
                        )) : selectedOptionTable === 'Unfilled Shifts - Historic' ? unfilledShiftsHistoric.map(row => (
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
