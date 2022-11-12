import React from 'react'
import Events from '../plugins/EventsCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import ProfileSummary from '../plugins/ProfileSummary'

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
}));

const Profile = () => {
    const classes = CardStyles();
    return (
        <div>
            <Row>
                <Col xs={12} lg={8} xl={9}>
                    <div className={classes.cardDiv}>
                        <h1 className={classes.pageTitle}>Profile</h1>
                        <Divider />
                        <ProfileSummary />
                    </div>
                </Col>
                <Col xs={12} lg={4} xl={3}>
                    <Events />
                </Col>
            </Row>
        </div>
    )
};

export default Profile