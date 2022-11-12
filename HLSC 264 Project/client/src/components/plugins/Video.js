import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Styles = makeStyles(() => ({
    video: {
        height: '158.82px',
        width: '282.35px',
        marginBottom: '15px',
        border: 'none',
        "@media (min-width: 375px)": {
            height: '180px',
            width: '320px',
        },
        "@media (min-width: 425px)": {
            height: '207.69px',
            width: '369.23px',
        },
        "@media (min-width: 481px)": {
            height: '270px',
            width: '480px',
        },
        "@media (min-width: 768px)": {
            height: '360px',
            width: '640px',
        },
        "@media (min-width: 1024px)": {
            height: '540px',
            width: '960px',
        },
    },
}));

const Video = ({ video }) => {

    const classes = Styles();

    return (
        <Row>
            <Col>
                <iframe className={classes.video} src={video} />
            </Col>
        </Row>
    )
}


export default Video;