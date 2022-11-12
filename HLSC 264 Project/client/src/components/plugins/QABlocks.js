import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles'
import Card from 'react-bootstrap/Card'
import Divider from '@material-ui/core/Divider';

const CardStyles = makeStyles(() => ({
    cardDiv: {
        padding: '20px 5px',
        fontFamily: 'Verdana',
    },
    card: {
        boxShadow: "0 1px 5px 0 rgba(0 0 0 / 16%), 0 1px 2px 0 rgba(0 0 0 / 26%)",
        border: 'none',
    },
    question: {
        fontWeight: 'bold',
        fontSize: '17pt',
        color: '#569099',
    },
}));

const qas = [
    { question: "When?", answer: "We don't know." },
    { question: "How to participate", answer: "We don't know." },
    { question: "Submissions", answer: "We don't know." },
];

// event bar componenets 
const Program = ({ question, answer }) => {
    const classes = CardStyles();
    return (
        <div className={classes.cardDiv}>
            <Card className={classes.card}>
                <Card.Body>
                    <Card.Title className={classes.question}>{question}</Card.Title>
                    <Card.Text>{answer}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

const List = () => {
    return (
        <div>
            {qas.map(qa =>
                <Program key={qa.question}{...qa} />
            )}
        </div>
    )
}

const QABlocks = () => {
    const classes = CardStyles();
    return (
        <Row>
            <Col>
                <div className={classes.cardDiv}>
                    <List />
                </div>
            </Col>
        </Row>
    )
};

export default QABlocks