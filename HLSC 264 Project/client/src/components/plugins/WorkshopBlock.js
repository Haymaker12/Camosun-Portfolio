import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cynthia from '../../assets/images/Cynthia Smith Portrait 2022.jpg'
import Thea from '../../assets/images/Thea Werkhoven.jpg'
import { makeStyles } from '@material-ui/core/styles'
import pdf from '../../assets/images/Participant Information Sheet - Obesity Stigma 2022 CS.pdf'

const Styles = makeStyles(() => ({
    p: {
        padding: '20px 0px',
        fontFamily: 'Verdana',
    },
    title: {
        textAlign: 'center',
        color: '#569099',
        fontWeight: 'bold',
        fontSize: '16pt',
        padding: '15px 0 0 0',
        "@media (min-width: 786px)": {
            padding: '20px',
        },
    },
    img: {
        width: '100%',
        height: 'auto',
        padding: '25px',
    },
    subtitle: {
        fontSize: '13px',
        textAlign: 'center',
        fontFamily: 'Verdana',
    },
    listDiv: {
        width: '100%',
        display: 'block',
        "@media (min-width: 425px)": {
            width: '50%',
        },
        "@media (min-width: 786px)": {
            width: '100%',
        },
        float: 'left',
    },
}));

const WorkshopBlock = () => {
    const classes = Styles();

    //If you want to add or remove paragraphs from the page, do so here and in the <div className={classes.p}> below 
    //Make sure to update links and hand out files 
    const title = "Investigating attitudes towards individuals at a higher weight amongst students in nursing and allied health programs."
    const p1 = `As future allied health and nursing practitioners, you may have a diverse range of clients in your care. Some may be at
    higher weight, traditionally labelled "overweight" or "obese". Unfortunately, some people at this weight status get treated differently to their
    peers who are in the normal weight category and this can negatively affect their mental, physical and social health.
    It may not be intentional to do this and it is in our human nature to categorize people but as professionals working in the health
    industry, there is a requirement for our practice to be free of bias so that we provide a high standard of care to all clients and patients 
    regardless of what size or shape they are.`
    const p2 = `Do you think you would be interested in exploring your own attitudes towards health and weight? A workshop will allow you to do this and 
    learn more about the topic during the IDE Festival open to students in Camosun College.`
    const p3 = `The workshop will be one hour in length and a survey below will be sent out to you beforehand to help you discover your own 
    attitudes. Come and join Drs Thea Werkhoven (University of Sydney, Australia) and Cynthia Smith (Camosun College) on the 23rd of March at 12:30pm.`
    const p4 = `Prior to the Zoom interactive workshop at 12:30 pm on March 23 you must complete the survey. If you can't attend the workshop 
    you can do the survey alone for your education.`

    return (
        <div>
            <h2 className={classes.title}>{title}</h2>
            <Row>
                <Col xs={{ order: 2, span: 12 }} lg={{ order: 1, span: 4 }}>
                    <div className={classes.listDiv}>
                        <img className={classes.img} src={Cynthia}></img>
                        <p className={classes.subtitle}>Dr. Cynthia Smith</p>
                    </div>
                    <div className={classes.listDiv}>
                        <img className={classes.img} src={Thea}></img>
                        <p className={classes.subtitle}>Dr. Thea Werkhoven</p>
                    </div>
                </Col>
                <Col xs={{ order: 1, span: 12 }} lg={{ order: 2, span: 8 }}>
                    <div className={classes.p}>
                        <p>{p1}</p>
                        <p>{p2}</p>
                        <p>{p3}</p>
                    </div>
                    
                    <p>{p4}</p>
                    <p><a href='https://sydney.au1.qualtrics.com/jfe/form/SV_43fGVLSmcDHagPc'>Obesity Workshop Survey</a></p>

                    <p>Obesity Workshop Zoom Link:  April 4th | 12:00pm to 1:00pm</p>
                    <p><a href='https://zoom.uts.edu.au/j/84420017985'>Workshop Zoom Link</a></p>

                    <p>For more information about participating please download the pdf below</p>
                    <p><a href={pdf} download={pdf}>Participant information statement</a></p>
                </Col>
            </Row>
        </div>
    )
}

export default WorkshopBlock;