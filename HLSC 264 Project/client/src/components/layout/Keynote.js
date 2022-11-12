import React from 'react'
import Events from '../plugins/EventsCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Card from 'react-bootstrap/Card'

const CardStyles = makeStyles(() => ({
    div: {
        marginBottom: '30px',
        "@media (min-width: 1024px)": {
        marginBottom: '50px',
        },
    },
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
    cardText: {
        border: 'none',
        textAlign: 'center',
        padding: '20px 5px',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '18pt',
        color: '#569099',
    },
    videoDiv: {
        display: 'flex',
        justifyContent: 'center',
    },
    video: {
        height: '158.82px',
        width: '282.35px',
        marginBottom: '15px',
        border: 'none',
        "@media (min-width: 375px)": {
            height: '180px',
            width: '320px',
        },
        "@media (min-width: 425px)": {
            height: '207.69px',
            width: '369.23px',
        },
        "@media (min-width: 481px)": {
            height: '270px',
            width: '480px',
        },
        "@media (min-width: 768px)": {
            height: '360px',
            width: '640px',
        },
        "@media (min-width: 1024px)": {
            height: '270px',
            width: '480px',
        },
        "@media (min-width: 1440px)": {
            height: '360px',
            width: '640px',
        },
    },
}));
const Keynote = () => {
    const classes = CardStyles();
    return (
        <div className={classes.div}>
            <Row>
                <Col xs={12} lg={8} xl={9}>
                    <Row>
                        <div className={classes.cardDiv}>
                            <Col>
                                <h1 className={classes.pageTitle}>Keynote Speaker</h1>
                                <Divider />
                            </Col>
                    
                            <Col>
                                <div className={classes.cardText}>
                                    <Card.Title className={classes.title}>Welcome to the 2022 Interdisciplinary Education Festival</Card.Title>
                                </div>
                            </Col>

                            <Col>
                                <div>
                                    <div className={classes.videoDiv} >
                                        <iframe className={classes.video} src="https://player.vimeo.com/video/693214949?h=8a13b72121" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <p>
                                        Dr. Rosina Mete is a registered psychotherapist and university professor. Her educational credentials include a BSc in Psychology from Carleton University, 
                                        a MSc in Clinical Mental Health Counselling from Niagara University, as well as a PhD in Leadership and Policy from Niagara University
                                    </p>
                                    <p>
                                    She is an award-winning academic and clinician as she received the Most Outstanding Doctoral Student in Leadership and Policy award from Niagara University in 2018 
                                    and in 2021, she won the Niagara This Week Reader’s Choice Award for Best Mental Health Consultant in Port Colborne.
                                    </p>
                                    <p>
                                    Dr. Rosina Mete currently works at Yorkville University in their graduate Counselling Psychology program as a full-time Faculty Member 
                                    and Course Lead for Assessment. She is also an Associate Faculty Member at City University of Seattle in 
                                    Canada with their Master of Counselling program. Additionally, she works part-time in private practice. 
                                    </p>
                                    <p>
                                    Dr. Mete is a skilled clinician with experience in community health, hospital, and university settings. Her research and publications 
                                    include topics on mental health, stress management, problem-solving and decision-making, and technology in education. She 
                                    enjoys providing presentations to foster mental health awareness and education to address stigma and provide tangible strategies for emotional wellbeing.
                                    </p>

                                    
                                </div>
                            </Col>
                            <Divider></Divider>
                            <br></br>
                            <Col>
                                <div>
                                    <div className={classes.videoDiv} >
                                        <iframe className={classes.video} src="https://player.vimeo.com/video/692121802?h=4dab87b30d" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <p>
                                    <Card.Text className={classes.cardText}>Laura Zychla is the CAMRT Manager of Professional Practice and Research. She manages the Best Practice Guidelines, advanced practice certification process, newly expanded research portfolio, and has recently supported the launch of a research fellowship program at CAMRT among other initiatives. She has an extensive background in research and award-wining national project management. Laura co-lead the creation of the National Mental Health Survey with CSMLS in 2016, 2018 and 2021, and was happy to partner with CAMRT and Sonography Canada to expand the efforts. In addition, Laura has over a decade of experience in the oncology setting, having worked for the Jurvainski Cancer Centre in decision support and research positions.</Card.Text>
                                    </p>
                                    <Divider></Divider>
                                </div>
                            </Col>
                            <Col>
                                <div className={classes.cardText}>
                                    <Card.Title className={classes.title}> 2021 Interdisciplinary Education Festival Keynote Address</Card.Title>
                                </div>
                            </Col>
                            <Col>
                                <div className={classes.videoDiv} >
                                    <iframe className={classes.video} src="https://player.vimeo.com/video/526268635" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div>
                                    <Card.Text className={classes.cardText}>2021 Keynote Address from Dr. Cynthia Smith, Dean of the School of Health and Human Services</Card.Text>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Col>
                <Col xs={12} lg={4} xl={3}>
                    <Events />
                </Col>
            </Row>
        </div>
    )
};
export default Keynote