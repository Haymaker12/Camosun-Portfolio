import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Styles = makeStyles(() => ({
    card: {
        backgroundColor: '#E0E0E2',
        boxShadow: "0 1px 5px 0 rgba(0 0 0 / 16%), 0 1px 2px 0 rgba(0 0 0 / 26%)",
        border: 'none',
        padding: '20px',
        minHeight: '150px',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '18pt',
        color: '#569099',
    },
    subtitles: {
        fontStyle: 'italic',
        fontSize: '13px',
    },
}));

const PowerPoint = ({ slide }) => {

    const classes = Styles();

    return (
        <Row>
            <Col>
                <img src={slide} alt="Power Point" class="text-center col"></img>
            </Col>
        </Row>
    )
}


export default PowerPoint;