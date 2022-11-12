import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles'
import Card from 'react-bootstrap/Card'
import ide from '../../assets/images/Full_Logo.png'

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
                            <Card.Img src={ide}></Card.Img>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
            <Col xs={12} xl={7}>
                <div className={classes.cardDiv}>
                    <Card className={classes.cardText}>
                        <Card.Body>
                            <Card.Title className={classes.title}>About the IDE Festival</Card.Title>
                            <h4>Camosun College’s Health and Human Services 5th Annual Interdisciplinary Education (IDE) Festival</h4>
                            <Card.Text>The 2022 festival has gone virtual for the third year in a row due to the pandemic. This year’s virtual festival website was created by Camosun’s very own Interactive Media Design (IMD) students. The IMD students worked collaboratively with programs across HHS and the college to launch this year’s festival. The festival’s theme – Mental Health and Resilience, highlights the necessity of communication and collaboration in our ever changing world. Students from HHS have submitted projects that help define their programs and future professions and the time we are living in. HHS students can visit the festival site to learn with, from, and about their HHS peers and their future professions, building knowledge and understanding of how they can contribute to improving - “collaboration and quality of care.”</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        </Row>
    )
};
export default AboutHHS