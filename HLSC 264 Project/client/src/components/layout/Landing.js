import React from 'react'
import Events from '../plugins/EventsCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles'
import Card from 'react-bootstrap/Card'
import logo from '../../assets/images/50 Logo FullCLR Vert.png'
import landingImg from '../../assets/images/landingImage.jpg'
import surveyBanner from '../../assets/images/Survey_Banner2.png'
import sponsor from '../../assets/icons/Sponsors_icon.png'
import presentation from '../../assets/icons/Presentation.png'
import { Divider } from '@material-ui/core'

const CardStyles = makeStyles(() => ({
    cardDiv: {
        padding: '20px 5px',
        fontFamily: 'Verdana',
    },
    splashImg: {
        backgroundColor: '#E0E0E2',

        "@media (min-width: 575px)": {
            boxShadow: "0 1px 5px 0 rgba(0 0 0 / 16%), 0 1px 2px 0 rgba(0 0 0 / 26%)",
        },
        border: 'none',
    },
    BannerTitle: {
        fontWeight: 'bold',
        fontSize: '14pt',
        "@media (min-width: 425px)": {
            fontSize: '16pt',
        },
        "@media (min-width: 768px)": {
            fontSize: '18pt',
        },
        "@media (min-width: 1024px)": {
            fontSize: '26pt',
        },
        backgroundColor: 'rgba(255,255,255,0.7)',
        color: '#569099',
        padding: '20px 0',
        margin: 'auto',
        textAlign: 'center',
    },
    body: {
        height: '100%',
        padding: '0',
        "@media (min-width: 575px)": {
            padding: '1.25rem',
        },
    },
    smallBox: {
        width: '100%',
        maxWidth: '200px',
        padding: '15px 0',
        "@media (min-width: 786px)": {
            width: '31%'
        },
        margin: 'auto',
    },
    smallBody: {
        border: 'none',
    },
    smallLogo: {
        border: 'none',
    },
    smallBoxDiv: {
        padding: '5px 0 0 0',
        display: 'block',
        "@media (min-width: 767px)": {
            padding: '20px 0 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    },
    logo: {
        height: 'auto',
        maxWidth: '100%',
        backgroundColor: "rgba(255, 255, 255, 0)!important",
        '&:hover': {
            backgroundColor: "rgba(240, 240, 240, 1)!important",
        },
    },
    icons: {
        padding: '20px',
        backgroundColor: "rgba(255, 255, 255, 0)!important",
        '&:hover': {
            backgroundColor: "rgba(240, 240, 240, 1)!important",
        },
    },
    iconLink: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#5A5A5A',
        fontFamily: 'Helvetica',
        letterSpacing: '5px',
    },
    img: {
        minHeight: '150px',
        objectFit: 'cover',
        objectPosition: '50% 50%',
    },
    divStyle: {
        padding: '10px',
        paddingBottom:'60px',
    },
    img: {
        minHeight: '150px',
        objectFit: 'cover',
        objectPosition: '50% 50%',
        backgroundColor: "rgba(255, 255, 255, 0)!important",
        '&:hover': {
            backgroundColor: "rgba(145, 190, 55, 1)!important",
        },
    },
}));
const Landing = () => {
    const classes = CardStyles();
    return (
        <div className={classes.divStyle}>
            <Row>
                <Col xs={12} lg={8} xl={9}>
                    <div className={classes.cardDiv}>
                        <Card className={classes.splashImg}>
                            <Card.Body className={classes.body}>
                                <Card.Img className={classes.img} variant="top" src={landingImg} />
                                <Card.Title className={classes.BannerTitle}>Interdisciplinary Education Festival 2022</Card.Title>
                            </Card.Body>
                                
                        </Card>
                        <br></br>
                                <Card.Link href="https://forms.gle/Gmc2hrYnYrGhhDw27">
                                    <Card.Img className={classes.img} variant="top" src={surveyBanner} />
                                    <br></br>
                                </Card.Link>
                        <br></br>
                        <Divider></Divider>
                        <br></br>
                        <div>
                            <Card.Text>Festival giveaways can be found on the Link Tree below. </Card.Text>
                            <a href="https://linktr.ee/ide2022">Giveaway Link Tree</a>
                            <Card.Text>Please note: Giveaway is open to Camosun Students only</Card.Text>
                        </div>
                        
                        <div className={classes.smallBoxDiv}>
                            <div className={classes.smallBox}>
                                <Card className={classes.smallBody}>
                                    <Card.Body>
                                        <Card.Link href="/programs">
                                            <Card.Img variant="top" src={presentation} className={classes.icons}/>
                                        </Card.Link>
                                        <Card.Title className={classes.iconLink}>PROJECTS</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className={classes.smallBox}>
                                <Card className={classes.smallLogo}>
                                    <Card.Body className="d-flex align-items-center justify-content-center">
                                        <Card.Link href="https://50.camosun.ca/">
                                            <Card.Img variant="top" src={logo} className={classes.logo} />
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            
                            <div className={classes.smallBox}>
                                <Card className={classes.smallBody}>
                                    <Card.Body>
                                        <Card.Link href="/sponsors">
                                            <Card.Img variant="top" src={sponsor} className={classes.icons} />
                                        </Card.Link>
                                        <Card.Title className={classes.iconLink}>SPONSORS</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={4} xl={3}>
                    <Events />
                </Col>
            </Row>
        </div>
    )
}

export default Landing