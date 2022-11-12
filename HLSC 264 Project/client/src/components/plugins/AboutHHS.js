import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import campus from '../../assets/images/healthTestImage.jpg'
import { makeStyles } from '@material-ui/core/styles'

const CardStyles = makeStyles(() => ({
    cardDiv: {
        fontFamily: 'Verdana',
    },
    card: {
        border: 'none',
    },
    cardText: {
        border: 'none',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '18pt',
        color: '#569099',
    },
}));
const AboutHHS = () => {
    const classes = CardStyles();
    return (
        <Row>
            <Col xs={12} xl={5}>
                <div className={classes.cardDiv}>
                    <Card className={classes.card}>
                        <Card.Body>
                            <Card.Img src={campus}></Card.Img>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
            <Col xs={12} xl={7}>
                <div className={classes.cardDiv}>
                    <Card className={classes.cardText}>
                        <Card.Body>
                            <Card.Title className={classes.title}>About HHS</Card.Title>
                            <h4>Working together to inspire healthy communities.</h4>
                            <Card.Text>The School of Health and Human Services includes over 15 different health and human services programs, many of which are now located in the Alex and Jo Campbell Centre for Health and Wellness on the Interurban campus. The Centre for Health and Wellness was built with the idea of promoting and supporting interdisciplinary collaboration and learning amongst health and human service programs. </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        </Row>
    )
};
export default AboutHHS