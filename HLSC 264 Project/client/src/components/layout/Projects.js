import React from 'react'
import Parser from '../plugins/Parser'
import Events from '../plugins/EventsCard'
import { makeStyles } from '@material-ui/core/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useLocation } from "react-router-dom"
import {YearSelect} from '../plugins/YearSelect'


const CardStyles = makeStyles(() => ({
    cardDiv: {
        padding: '20px 5px',
        fontFamily: 'Verdana',
        cursor: 'pointer',
    },
}));

let getProjects = async (programID, year) => {
    programID = programID ?? "";

    //const {match: {params}} = this.props;
    const res = await fetch(`/api/projects?program=${programID}&year=${year}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin"
    })

    // This is where the data is stored
    const data = await res.json();
    return data;
};

const Projects = ({ match }) => {
    const classes = CardStyles();
    const [projects, setProjects] = React.useState([]);
    const [year, setYear] = React.useState(2022)

    let queryString = new URLSearchParams(useLocation().search);
    let programID = queryString.get("program");

    // Once the component loads, fetch project data once into
    // the "projects" state variable
    // programID and year conditionals so it will run query again on year select change
    React.useEffect(() => {
        (async () => {
            setProjects(await getProjects(programID, year));
        })();
    }, [programID, year]);


    // Outputting it into a DIV for testing. Parse/beautify it later as
    // required
    return (
        <div>
            <Row>
                <Col xs={12} lg={8} xl={9}>
                    <div className={classes.cardDiv}>
                        <YearSelect year={year} setYear={setYear} />
                        <Parser data={projects} />
                    </div>
                </Col>
                <Col xs={12} lg={4} xl={3}>
                    <Events />
                </Col>

            </Row>
        </div>
    )
};

export default Projects