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

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

function createData(jobNo, site, dept, desc, manager, cost) {
    return { jobNo, site, dept, desc, manager, cost };
}

const rows = [
    createData('HCP102213', 'Bexley', 'N/A', 'RN - Palliative Care or General Nurse', 'Belinda Cooper', '278'),
    createData('HCP102221', 'Islington', 'Bariatric', 'Health Care Assistant', 'Mike Holmes', '187'),
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Toolbar>
                <Typography variant="h6" id="tableTitle">
                    Vacant Shifts - Current
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
                    {rows.map(row => (
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
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}