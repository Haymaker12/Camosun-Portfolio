import React from 'react'
import Events from '../plugins/EventsCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import FullForm from '../plugins/Form'

const CardStyles = makeStyles(() => ({
    div: {
        marginBottom: '473px',
        "@media (min-width: 786px)": {
            marginBottom: '261px',
        }
    },
    cardDiv: {
        width: '80%',
        padding: '20px 5px',
        fontFamily: 'Verdana',
    },
    pageTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '30pt',
        fontFamily: 'Helvetica',
    },
}));
const Form = () => {
    const classes = CardStyles();
    return (
        <div className={classes.div}>
            <Col>
                <div className={classes.cardDiv}>
                    <FullForm />
                </div>
            </Col>
        </div>
    )
};
export default Form
