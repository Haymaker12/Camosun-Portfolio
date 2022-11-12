import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import { makeStyles} from '@material-ui/core/styles'

const EventStyle = makeStyles(() => ({
    cardDiv: {
        padding: '20px 5px',
        fontFamily: 'Verdana',
    },
    card: {
        boxShadow: "0 1px 5px 0 rgba(0 0 0 / 16%), 0 1px 2px 0 rgba(0 0 0 / 26%)",
        border: 'none',
    }
}));

const events = [
    { event: "Obesity Workshop", date: "April 4th, 2022", time: "12:00pm - 1:00pm ", link: "/workshops" },

];

// event bar componenets 
const Event = ({ event, date, time, link, className }) => {
    return (
        <div className={className}>
            <ListGroup variant="flush">
                <ListGroup.Item><Card.Link href={link}>{event}</Card.Link></ListGroup.Item>
                <ListGroup.Item><Card.Text>{date}</Card.Text></ListGroup.Item>
                <ListGroup.Item><Card.Text>{time}</Card.Text></ListGroup.Item>
            </ListGroup>
        </div>
    )
}

const EventList = () => {
    return (
        <div>
            {events.map(event =>
                <Event key={event.event}{...event} />
            )}
        </div>
    )
}

export default function EventBar(){
    const classes = EventStyle();

    return (
    <div className={classes.cardDiv}>
        <Card className={classes.card}>
            <Card.Body>
                <Card.Title>Event Schedule</Card.Title>
                <EventList />
            </Card.Body>
        </Card>
    </div>
    )
}
