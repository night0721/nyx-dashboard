import { makeStyles } from '@material-ui/core'
import React from 'react'
import Link from 'next/link'

const useStyles = makeStyles({
    homeCard: {
        width: '350px',
        height: '150px',
        background: '#1f1b24',
        margin: '10px',
        padding: '20px',
        borderRadius: '15px',

        '&:hover': {
            background: '#2c2633',
        }
    },
    title: {
        marginTop: '3px',
    },
    desc: {}
})

function HomeCard({title, desc, link=''}) {

    const classes = useStyles()

    return (
        <Link href={link}>
            <div className={classes.homeCard}>
                <h1 className={classes.title}>{title}</h1>
                <p className={classes.desc}>{desc}</p>
            </div>
        </Link>
    )
}

export default HomeCard
