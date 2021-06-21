import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Head from 'next/head'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, description, status) {
    return { name, description, status };
}

const rows = [
    createData('Command', 'Description', true),
    createData('Command', 'Description', true),
    createData('Command', 'Description', true),
    createData('Command', 'Description', true),
];

function Commands() {
    const classes = useStyles();

    return (
        <>
            <Head>
                <title>Cath Commands</title>
            </Head>
            <TableContainer component={Paper} style={{ background: '#1F1B24' }}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ color: '#fff' }}>Commands</TableCell>
                            <TableCell align="right" style={{ color: '#fff' }}>Description</TableCell>
                            <TableCell align="right" style={{ color: '#fff' }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row" style={{ color: '#fff' }}>
                                    {row.name}
                                </TableCell>
                                <TableCell align="right" style={{ color: '#fff' }}>{row.description}</TableCell>
                                <TableCell align="right" style={{ color: '#fff' }}>{row.status ? 'Online' : 'Offline'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Commands
