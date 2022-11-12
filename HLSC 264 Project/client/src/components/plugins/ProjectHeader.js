import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Divider from '@material-ui/core/Divider'

const CardStyles = makeStyles(() => ({
    card: {
        backgroundColor: '#E0E0E2',
        boxShadow: "0 1px 5px 0 rgba(0 0 0 / 16%), 0 1px 2px 0 rgba(0 0 0 / 26%)",
        border: 'none',
        padding: '20px',
        minHeight: '150px',
    },
    title: {
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        wordBreak: 'break-word',
    },
    subtitles: {
        fontStyle: 'italic',
        fontSize: '13px',
        fontFamily: 'Verdana',
        wordBreak: 'break-word',
    },
    div: {
        padding: '15px 0',
        marginBottom: '15px',
    },
}));

// Component to go on the header of a project.
const ProjectHeader = ({ name, authors, date, program }) => {
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
            <Row>
                <Col>
                    <h1 className={classes.title}>{name}</h1>
                    <h5 className={classes.subtitles}>Authors: {authorString} &nbsp;  Program: {program} &nbsp; Date: {date}</h5>
                    <Divider />
                </Col>
            </Row>
        </div>
    )
};

export default ProjectHeader;

