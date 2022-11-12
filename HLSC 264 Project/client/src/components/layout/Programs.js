import React from 'react'
import Events from '../plugins/EventsCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles'
import Card from 'react-bootstrap/Card'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Divider from '@material-ui/core/Divider'
import {YearSelect} from '../plugins/YearSelect'

const CardStyles = makeStyles(() => ({
    cardDiv: {
        padding: '20px 5px',
        fontFamily: 'Verdana',
        cursor: 'pointer',
    },
    div: {
        marginBottom: '30px',
    },
    listDiv: {
        width: '100%',
        display: 'block',
        "@media (min-width: 786px)": {
            width: '50%',
        },
        padding: '15px',
        float: 'left',
    },
    card: {
        boxShadow: "0 1px 5px 0 rgba(0 0 0 / 16%), 0 1px 2px 0 rgba(0 0 0 / 26%)",
        border: 'none',
        width: '100%',
        backgroundColor: '#E0E0E2',
        minHeight: '150px',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        '&:hover': {
            opacity: '0.8',
        },
    },
    pageTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '30pt',
        fontFamily: 'Helvetica',
    },
    link: {
        '&:hover': {
            textDecoration: 'none',
        },
    },
    linkText: {
        fontWeight: 'bold',
        fontSize: '18pt',
        color: '#569099',
    },
}));

let getPrograms = async () => {

    const res = await fetch("/api/programs", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin"
    });

    // This is where the data is stored
    const data = await res.json();
    return data;
};



// event bar componenets 
const Program = ({ program, _id }) => {
    const [clickedId, setClickedId] = React.useState(_id);
    const classes = CardStyles();

    const linkTo = {
        pathname: `/projects?program=${clickedId}`,
        id: clickedId
    }

    return (
        <div className={classes.listDiv}>
            <Router forceRefresh={true}>
                <Link to={linkTo} className={classes.link}>
                    <Card className={classes.card}>
                        <Card.Body>
                                <Card.Title className={classes.linkText}>{program}</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Router >
        </div >
    )
}

const ProgramList = () => {

    const [programs, setPrograms] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            setPrograms(await getPrograms());
        })();
    }, []);

    return (
        <div>
            {programs.map(program =>
                <Program key={program._id}{...program} />
            )}
        </div>
    )
}

const Programs = () => {
    const classes = CardStyles();
    return (
        <Router>
            <div className={classes.div}>
                <Row>
                    <Col xs={12} lg={8} xl={9}>
                        <div className={classes.cardDiv}>
                            <h1 className={classes.pageTitle}>Programs</h1>
                            <Divider />
                            <ProgramList />
                        </div>
                    </Col>
                    <Col xs={12} lg={4} xl={3}>
                        <Events />
                    </Col>
                </Row>
            </div>
        </Router>
    )
};
export default Programs 
