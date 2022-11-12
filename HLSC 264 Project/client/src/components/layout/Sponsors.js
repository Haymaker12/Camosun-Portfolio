import React from 'react'
import Events from '../plugins/EventsCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Card from 'react-bootstrap/Card'
import fantastico from '../../assets/images/FantasticoLogo.png'
import lifeSci from '../../assets/images/LifeSciences.jpg'



const CardStyles = makeStyles(() => ({
    cardDiv: {
        padding: '20px 5px',
        fontFamily: 'Verdana',
    },
    pageTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '30pt',
        fontFamily: 'Helvetica',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '18pt',
        color: '#569099',
    },
    cardText: {
        border: 'none',
        textAlign: 'center',
        padding: '20px 5px',
    },
}));

const Sponsors = () => {
    const classes = CardStyles();
    return (
        <div>
            <Row>
                <Col xs={12} lg={8} xl={9}>
                    <div className={classes.cardDiv}>
                        <h1 className={classes.pageTitle}>Sponsors</h1>
                        <Divider />
                        <Row>  
                            <Col>
                                <div className={classes.cardText}>
                                <Card.Text>The IDE Festival would like to thank our generous sponsors.</Card.Text> 
                                </div>
                            </Col>
                        </Row>
                        
                        <Row>
                            
                            <Col>
                                <a href="https://www.vils.ca/">
                                    <Card.Body>
                                        <Card.Img src={lifeSci} ></Card.Img>
                                        <br/>
                                        <br/>
                                        <Card.Title className={classes.title}>Vancouver Island Life Sciences</Card.Title>
                                    </Card.Body> 
                                </a>    
                            </Col>
                        </Row>
                        <Divider></Divider>
                        <br></br>
                        <Row>
                            <Col>
                                <p>
                                    Special thanks to Laura Zychla.
                                </p>
                            </Col>
                        </Row>
                        
                    </div>
                </Col>
                <Col xs={12} lg={4} xl={3}>
                    <Events />
                </Col>
            </Row>
        </div>
    )
};
export default Sponsors