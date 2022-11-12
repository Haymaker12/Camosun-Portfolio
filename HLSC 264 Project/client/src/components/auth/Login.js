import React from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import Events from '../plugins/EventsCard'
import LoginForm from '../plugins/LoginForm'
import RegisterForm from '../plugins/RegisterForm'
import Welcome from '../plugins/Welcome'
import Profile from '../layout/Profile'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'


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

const ConditionalForm = () => {
    const [showForm, setShowForm] = React.useState(true);

    return (
        <Row>
            <Col xs={12} xl={6}>
                <LoginForm setShowForm={setShowForm} />
            </Col>
            <Col xs={12} xl={6}>
                <RegisterForm setShowForm={setShowForm} />
            </Col>
            {showForm ?
                <div></div>
            :
            <Router forceRefresh={true}>
                <Redirect to='/profile'></Redirect>
            </Router>
            }
        </Row>
        
    )
}

const Login = () => {
    const classes = CardStyles();

    return (
        <div>
            <Row>
                <Col xs={12} lg={8} xl={9}>
                    <div className={classes.cardDiv}>
                        <h1 className={classes.pageTitle}>Log In / Register</h1>
                        <Divider />
                        <ConditionalForm />
                    </div>
                </Col>
                <Col xs={12} lg={4} xl={3}>
                    <Events />
                </Col>
            </Row>
        </div>
    )
}



export default Login;