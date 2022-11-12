import React from 'react'
import Events from '../plugins/EventsCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider';
import QABlocks from '../plugins/QABlocks'

const CardStyles = makeStyles(() => ({
    pageTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '30pt',
        fontFamily: 'Helvetica',
    },
    cardDiv: {
        padding: '20px 5px',
        fontFamily: 'Verdana',
    },
}));

const FAQ = () => {
    const classes = CardStyles();
    return (
        <div>
            <Row>
                <Col xs={12} lg={8} xl={9}>
                    <div className={classes.cardDiv}>
                        <h1 className={classes.pageTitle}>FAQ</h1>
                        <Divider />
                        <QABlocks />
                    </div>
                </Col>
                <Col xs={12} lg={4} xl={3}>
                    <Events />
                </Col>
            </Row>
        </div>
    )
};

export default FAQ