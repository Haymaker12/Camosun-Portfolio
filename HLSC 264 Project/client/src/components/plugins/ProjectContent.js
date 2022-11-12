import React from 'react'
import PowerPoint from '../plugins/PowerPoint'
import Poster from '../plugins/Poster'
import Video from '../plugins/Video'
import SingleImage from '../plugins/SingleImage'
import BulletPoint from '../plugins/BulletPoints'
import URL from '../plugins/URL'
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
        wordBreak: 'break-word',
    },
    subtitles: {
        fontStyle: 'italic',
        fontSize: '13px',
        wordBreak: 'break-word',
    },
    div: {
        padding: '0 15px',
    },
    p: {
        wordBreak: 'break-word',
    },
    video: {
        display: 'flex',
        justifyContent: 'center',
    }
}));

//project component, renders out and parses an individual project using the content tag within an individual item object.
const ProjectContent = ({ content }) => {

    const classes = CardStyles();

    if (content) {
        return (
            <>
                {content.map((item, index) => {
                    
                    let id = item.type + "_" + index;
                    
                    switch (item.type) {
                        case "h1":
                            return (
                                <h2 className={classes.p} key={ id }> {item.content} </h2>
                            )
                        case "h2":
                            return (
                                <h3 className={classes.p} key={ id }> {item.content} </h3>
                            )
                        case "p":
                            return (
                                <p className={classes.p} key={ id }> {item.content} </p>
                            )
                        case "si":
                            return (
                                <Row key={ id }>
                                    <Col className={classes.video}>
                                        <SingleImage image={item.content} />
                                    </Col>
                                </Row>
                            )
                        case "pp":
                            return (
                                <Row key={ id }>
                                    <Col className={classes.video}>
                                        <PowerPoint slide={item.content} />
                                    </Col>
                                </Row>
                            )
                        case "ps":
                            return (
                                <Row key={ id }>
                                    <Col className={classes.video}>
                                        <Poster poster={item.content} />
                                    </Col>
                                </Row>
                            )
                        case "v":
                            return (
                                <Row key={ id } >
                                    <Col className={classes.video}>
                                        <Video video={item.content} />
                                    </Col>
                                </Row>
                            )
                        case "url":
                            return (
                                <div key={ id }>
                                    <URL link={item.content}></URL>
                                </div>
                            )
                        case "bp":
                            return (
                                <div key={ id }>
                                    <BulletPoint content={item.content} />
                                </div>
                            )
                        default:
                            return (
                                <div key={ id }></div>
                            )
                    }
                }
                )}
            </>
        )
    }
    else {
        return (
            <div></div>
        );
    }

};

export default ProjectContent;