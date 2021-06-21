import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function CardContainer(props) {
    const classes = useStyles();

    return (
        <a href={props.link}>
            <Card className={classes.root} style={{ background: '#1F1B24', border: '2px solid #00c7b6' }}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.children}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </a>
    );
}