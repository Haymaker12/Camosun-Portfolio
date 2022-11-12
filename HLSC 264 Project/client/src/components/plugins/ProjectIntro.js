import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

const CardStyles = makeStyles(() => ({
    card: {
        backgroundColor: '#E0E0E2',
        boxShadow: "0 1px 5px 0 rgba(0 0 0 / 16%), 0 1px 2px 0 rgba(0 0 0 / 26%)",
        border: 'none',
        padding: '20px',
        minHeight: '150px',
        '&:hover': {
            opacity: '0.8',
        },
    },
    title: {
        fontWeight: 'bold',
        fontSize: '18pt',
        color: '#569099',
    },
    subtitles: {
        fontStyle: 'italic',
        fontSize: '13px',
        color: 'black!important',
    },
    div: {
        padding: '0 15px',
    },
    link: {
        '&:hover': {
            textDecoration: 'none',
        },
    },
    desc: {
        color: 'black!important',
    },
}));

const ProjectIntro = ({ shortDescription, name, authors, _id }) => {
    const classes = CardStyles();

    let authorString = "";
    for (let i = 0; i < authors.length; i++) {
        if (i === 0) {
            authorString += authors[i];
        } else if (i === authors.length - 1) {
            authorString += (", and " + authors[i]);
        } else {
            authorString += (", " + authors[i]);
        }
    }

    return (
        <div className={classes.div}>
            <Router forceRefresh={true}>
                <Link to={`/project/${_id}`} className={classes.link}>
                    <Card className={classes.card}>
                        <Card.Title className={classes.title}>{name}</Card.Title>
                        <Card.Subtitle className={classes.subtitles}>Authors: {authorString}</Card.Subtitle>
                        <Card.Text className={classes.desc}>{shortDescription}</Card.Text>
                    </Card>
                </Link>
            </Router>
        </div >

    )
}

export default ProjectIntro;
