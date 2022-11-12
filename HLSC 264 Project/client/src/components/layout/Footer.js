import React from 'react'
import CamosunLogo from '../../assets/images/Camosun-Corporate-Logo-White.png'
import FooterAsset from '../../assets/images/FooterAsset-White.png'
import { makeStyles } from '@material-ui/core/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const FooterStyles = makeStyles(() => ({
    logo: {
        minWidth: '2.54cm',
        width: '100%',
        maxWidth: '7cm',
        padding: '20px',
    },
    paragraph: {
        color: 'white',
        textAlign: 'center',
        padding: '20px 20px 0 20px',
        fontSize: '0.9rem',
        maxWidth: '600px',
        fontFamily: 'Verdana',
    },
    cutOffLogo: {
        width: 'auto',
        maxWidth: '7cm',
        paddingTop: '20px',
        paddingRight: '20px',
        paddingLeft: '20px',
        height: 'auto',
    },
    footer: {
        backgroundColor: '#5A5A5A', //#5A5A5A
        width: '100%',
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const Footer = () => {

    const classes = FooterStyles();

    return (
        <div className={classes.footer}>
            <Container>
                <Row className={classes.row}>
                    <Col xs={{ order: 1, span: 12 }} sm={{ order: 2, span: 6 }} lg={{ order: 1, span: 3 }} className="d-flex align-items-center justify-content-center">
                        <img src={CamosunLogo} alt="Camosun College" className={classes.logo} />
                    </Col>
                    <Col xs={{ order: 2, span: 12 }} sm={{ order: 1, span: 12 }} lg={{ order: 2, span: 6 }} className="d-flex align-items-center justify-content-center">
                        <p className={classes.paragraph}>Camosun College is located in beautiful Victoria, British Columbia with campuses on
                        the Traditional Territories of the Lekwungen and WS&Aacute;N&Eacute;C peoples. We acknowledge their
                        welcome and graciousness to the students who seek knowledge here.
                    </p>
                    </Col>
                    <Col xs={{ order: 3, span: 12 }} sm={{ order: 3, span: 6 }} lg={{ order: 3, span: 3 }}>
                        <div>
                            <img src={FooterAsset} alt="Camosun Student Produced" className={classes.cutOffLogo}></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer