import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Divider from '@material-ui/core/Divider';

const CardStyles = makeStyles(() => ({
    cardDiv: {
        padding: '20px 5px',
        fontFamily: 'Verdana',
    },
    form: {
        backgroundColor: '#E0E0E2',
        boxShadow: "0 1px 5px 0 rgba(0 0 0 / 16%), 0 1px 2px 0 rgba(0 0 0 / 26%)",
        border: 'none',
    },
    subtitles: {
        fontStyle: 'italic',
        fontSize: '13px',
    },
}));

const projects = [
    { project_title: "Stuff that can't go in your nose", department: "Practical Nursing", visited: "Feb 28, 2021", link: "/projects" },
    { project_title: "Stuff that can't go in your nose", department: "Practical Nursing", visited: "Feb 28, 2021", link: "/projects" },
    { project_title: "Stuff that can't go in your nose", department: "Practical Nursing", visited: "Feb 28, 2021", link: "/projects" },
];

// event bar componenets 
const Projects = ({ project_title, department, visited, link }) => {
    const classes = CardStyles();
    return (
        <div className={classes.listDiv}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Card.Link href={link}><Card.Title>{project_title}</Card.Title></Card.Link>
                    <Card.Text>Department: {department}</Card.Text>
                    <Card.Text className={classes.subtitles}>Visited on: {visited}</Card.Text>
                    <Divider />
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

const ProjectList = () => {
    return (
        <div>
            {projects.map(project =>
                <Projects key={project.project_id}{...project} />
            )}
        </div>
    )
}

const ProfileSummary = ({ student_name, student_full_name, program_name, registration_date }) => {
    const classes = CardStyles();
    return (
        <Row>
            <Col>
                <div className={classes.cardDiv}>
                    <Card className={classes.form}>
                        <Card.Body>
                            <Card.Title>Welcome, {student_name}!</Card.Title>
                            <h6 className={classes.subtitles}>Personal Info:</h6>
                            <Divider />
                            <p>Student: {student_full_name}</p>
                            <p>Program: {program_name}</p>
                            <p>Registration date: {registration_date}</p>
                            <br />
                            <h6 className={classes.subtitles}>Last visits:</h6>
                            <Divider />
                            <br />
                            <ProjectList />
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        </Row>
    )
};

export default ProfileSummary