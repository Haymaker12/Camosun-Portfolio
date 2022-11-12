import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Divider from '@material-ui/core/Divider'

const CardStyles = makeStyles(() => ({
    card: {
        backgroundColor: '#E0E0E2',
        boxShadow: "0 1px 5px 0 rgba(0 0 0 / 16%), 0 1px 2px 0 rgba(0 0 0 / 26%)",
        border: 'none',
        padding: '20px',
        minHeight: '150px',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '18pt',
        color: '#569099',
    },
    subtitles: {
        fontStyle: 'italic',
        fontSize: '13px',
    },
    div: {
        padding: '0 15px',
    },
}));

const BulletPoint = ({content}) => {
    const classes = CardStyles();
    if (content) {
        return (
            <div className={classes.div}>
                <Row>
                    <Col>
                    <ul>
                        {content.map(item => {
                            return(
                                <li key = {item.id}> {item.content} </li>
                            )
                        })}
                    </ul>
                    </Col>
                </Row>
            </div>
        );
    }
    else {
        return (
            <div className={classes.div}>
            </div>
        );
    }
    
}

export default BulletPoint;