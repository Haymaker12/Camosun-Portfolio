import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Styles = makeStyles(() => ({
    poster: {
        height: 'auto',
        marginBottom: '15px',
        maxWidth: '300px',
        "@media (min-width: 375px)": {
            maxWidth: '350px',
        },
        "@media (min-width: 425px)": {
            maxWidth: '400px',
        },
        "@media (min-width: 481px)": {
            maxWidth: '456px',
        },
        "@media (min-width: 500px)": {
            maxWidth: '475px',
        },
        "@media (min-width: 767px)": {
            width: '100%',
            maxWidth: '100%',
        },
    }
}));

const Poster = ({ poster }) => {
    const classes = Styles();
    return (
        <Row>
            <Col>
                <img className={classes.poster} src={process.env.PUBLIC_URL + "/images/" + poster}></img>
            </Col>
        </Row>
    )
}

export default Poster;