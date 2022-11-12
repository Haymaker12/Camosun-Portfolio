import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CardStyles = makeStyles(() => ({
    img: {
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

const SingleImage = ({ image }) => {
    const classes = CardStyles();

    return (
        <div >
            <Row>
                <Col>
                    {/* <img className={classes.img} src={process.env.PUBLIC_URL + "/images/" + image}></img> */}
                    <img className={classes.img} src={ image }></img>
                </Col>
            </Row>
        </div>
    )
}

export default SingleImage;