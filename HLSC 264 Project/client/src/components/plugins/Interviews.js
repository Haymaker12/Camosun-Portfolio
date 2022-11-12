import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormHelperText } from '@material-ui/core'


const CardStyles = makeStyles(() => ({
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
    pageSubTitle: {
        fontWeight: 'bold',
        fontSize: '16pt',
        color: '#569099',
    },
    questionHeader: {
        paddingTop: '10px',
        fontSize: '14pt',
        fontFamily: 'Helvetica',
        color: '#569099',
    },
    video: {
        textAlign: 'center',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
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
const Question1 = () => {
    const classes = CardStyles();
    return (
        <h4 className={classes.questionHeader}>How would you describe your program to someone with no prior knowledge</h4>
    )
};

const Question2 = () => {
    const classes = CardStyles();
    return (
        <h4 className={classes.questionHeader}>Describe what a typical school week looks like in your program.</h4>
    )
};

const Question3 = () => {
    const classes = CardStyles();
    return (
        <h4 className={classes.questionHeader}>What were your expectations going into your program? Has your program met these expectations?</h4>
    )
};

const Question4 = () => {
    const classes = CardStyles();
    return (
        <h4 className={classes.questionHeader}>What kind of collaborative skills have you learned in your program? For example, what kind of group work does your program offer?</h4>
    )
};

const Question5 = () => {
    const classes = CardStyles();
    return (
        <h4 className={classes.questionHeader}>What kinds of resources could be implemented by instructors to make your journey easier?</h4>
    )
};

const Question6 = () => {
    const classes = CardStyles();
    return (
        <h4 className={classes.questionHeader}>In your program, did you connect with someone you would consider a mentor?</h4>
    )
};

const Question7 = () => {
    const classes = CardStyles();
    return (
        <h4 className={classes.questionHeader}>Is there any advice that you would pass to future students?</h4>
    )
};

const Question8 = () => {
    const classes = CardStyles();
    return (
        <h4 className={classes.questionHeader}>How does interdisciplinary education fit into your program and what are the benefits you’ve derived from this learning environment?</h4>
    )
};

const DeanInterview = () => {
    const classes = CardStyles();
    return (
        <Row>
            <div className={classes.cardDiv}>
                <Col>
                    <h1 className={classes.pageSubTitle}>Dean Interview</h1>
                </Col>
                <Col>
                    <div className={classes.cardText}>
                        <Card.Title className={classes.title}>Welcome to the 2022 Interdisciplinary Education Festival</Card.Title>
                    </div>
                </Col>
                <Col>
                    <div className={classes.videoDiv} >
                        <iframe className={classes.video} title="vimeo-player" src="https://player.vimeo.com/video/690060254?h=0d49456a6d" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <Card.Text className={classes.cardText}>An Interview with Dr. Cynthia Smith and Dr. Lori Zehr, Dean and associate Dean of the School of Health and Human Services.</Card.Text>
                    </div>
                </Col>
            </div>
        </Row>
    )
};


const Interviews = () => {
    const classes = CardStyles();
    return (
        <div>
                    <div className={classes.cardDiv}>
                        <DeanInterview />
                        <h1 className={classes.pageSubTitle}>Student Interviews</h1>
                        <>
                        <div>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <h2 className={classes.pageSubTitle}>Interview with a Practical Nursing Student</h2>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <Question1 />
                                                <p>In our program we learn nursing care and assessment in order to work in the healthcare setting as a PN.</p>
                                                <Divider />
                                            <Question2 />
                                                <p>We have 6 classes, two four days a week and one day is only one class. There are two lab sessions included in the term.</p>
                                                <Divider />
                                            <Question3 />
                                                <p>I expected it to be fun and supportive, however it’s super high stress.</p>
                                                <Divider />
                                            <Question4 />
                                                <p>We have 2 group projects a term. In communication class we learn how to be a good team member in a collaborative setting.</p>
                                                <Divider />
                                            <Question5 />
                                                <p>Tutor resources would be extremely helpful.</p>
                                                <Divider />
                                            <Question6 />
                                                <p>No, I did not really connect with the instructors in my program.</p>
                                                <Divider />
                                            <Question7 />
                                                <p>Taking care of your mental health should be a priority and get help from teachers when you need it. Don’t be afraid to ask classmates for help. Work on your school work between classes so when you go home you can relax.</p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        <h2 className={classes.pageSubTitle}>Interview with a Dental Hygiene Student</h2>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <Question1 />
                                                <p>If a person who does not know about the career asked me to talk about my program, I would tell them that dental hygienists must provide care in the field of dentistry. 
                                                Being a dental hygienist you must know the oral cavity of the patient, but you must also know about careers related to health, patient ethics, technology, science, psychology, 
                                                and direct patient care. It is a very broad field that opens many doors in the labor field.</p>
                                                <Divider />
                                            <Question2 />
                                                <p>A typical week includes a lot of study. This is a full-time program, between 6 to 8 courses per term, this time I took 7 courses. 
                                                We are now covering very interesting topics such as radiology in dental practice, periodontology, professional practice, clinical theory, clinical practice 2, oral sciences, and general pathophysiology. 
                                                Hours vary according to what cohort group we’re placed in; however, it runs from 8am to 6pm, Monday through Friday. There are 3-4 hours of independent study a day at home. 
                                                Studying the dental hygiene program is exhausting and very demanding, but I just think that I will soon achieve my goals and that gives me the strength to keep going.</p>
                                                <Divider />
                                            <Question8 />
                                                <p>A dental hygienist must have constant communication with other health professions, among the closest professions with which we have interaction within Camosun College are the Nursing Program, Health Care Assistant Program, as well as the Family & Child Studies Program. 
                                                This communication prepares us for our professional life, since it is very likely that we will work with them very closely, at some point in our professional careers.</p>
                                                <Divider />
                                            <Question3 />
                                                <p>Yes, the dental hygiene program has met my expectations. However, I am not going to deny that I was afraid at the beginning of the pandemic, because our face-to-face classes were suspended, and they went to virtual classes. 
                                                I thought I would not have the opportunity to practice, and I would not learn. However, now we only see 2 virtual classes out of the 7 I receive, and the pandemic has not been an obstacle in my learning. 
                                                I am very excited because we have already begun to practice more, feeling more responsible in our roles, and thinking more like dental hygienists. ]</p>
                                                <Divider />
                                            <Question4 />
                                                <p>Fortunately, the Dental Hygiene Program requires all students to study certain psychology courses and in a way that helps us to identify traits of depression or stress not only in patients but also in ourselves and our colleagues. 
                                                We have been a very united group and many times we form work groups both in face-to-face classes and online. We all support each other, especially during pandemic times. 
                                                I believe that the Dental Hygiene Program helps us communicate effectively with other professionals in the health field.</p>
                                                <Divider />
                                            <Question5 />
                                                <p>The instructors of the Dental Hygiene program have been very good to all of us, they have always shown us that we can count on them. However, at the beginning of the pandemic it was a challenge to have to adapt to the new mode of online learning. 
                                                We missed human contact and many of us felt extremely lonely. I think that could have changed if the instructors had put more emphasis on the students, that is, to know them better, chat with them, find out a little more about their lives. 
                                                Perhaps they could advise us on counseling or make the courses more flexible. (Remove at least 2 courses from the terms, etc). Luckily, we returned to face-to-face classes in most of the courses, but even so I feel that the pandemic left a great void in us.</p>
                                                <Divider />
                                            <Question6 />
                                                <p>No, I never asked for help, because I didn't really feel that anyone was worried about me. However, certain instructors were more friendly and concerned about the students, others just kept their distance (as if they didn't care about anyone's private life). 
                                                I fondly remember Liz Morch and Leta Zaleski, when I talk to them, they transmit sweetness, but I did not feel close enough or confident enough to ask for help.</p>
                                                <Divider />
                                            <Question7 />
                                                <p>Yes, to future students, I would give 4 pieces of advice:
                                                Do not give up; Dental Hygiene is a very demanding program, but at the same time it is beautiful, it is in great demand and promises a good future, keep going and do not be discouraged.
                                                Discipline is very important. Take advantage of your time from the beginning, study day by day and don't let homework accumulate because later there may not be time to hand everything in on time.
                                                Before deciding what to do, make sure you know info about the career you're choosing. This way you don’t waste time or money studying something you don't like or see yourself working as in the future.</p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        <h2 className={classes.pageSubTitle}>Interview With Medical Radiography Student Rep</h2>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <Question1 />
                                                <p>The medical radiography program is both academically challenging and extremely rewarding. Medical Radiological Technologists play an important role in healthcare assisting physicians in the process of diagnosing and treatment of patients. Throughout the program, you are trained on a variety of vital tasks for this role from equipment operation, imaging procedures, radiation safety, and overall patient care. With a mixture of academic courses and clinical practicums, Camosun prepares students for their future endeavors.</p>
                                                <Divider />
                                            <Question2 />
                                                <p>Our typical school week is very dependent on the semester because half of our program is in the clinical setting. During our clinical terms, you can find us at our designated hospital sites participating in hands-on learning in the x-ray department, fluoroscopy, the O.R., or CT. For our academic terms, our program is mostly online with a mixture of synchronous and asynchronous classes accompanied by in-person lab time each week. You can typically find the MRAD students on their computers studying or in the school's lab practicing their skills!</p>
                                                <Divider />
                                            <Question8 />
                                                <p>Our program took place during the pandemic restrictions so we didn't get a chance to work with other programs directly during our academic terms. However, during our clinical experience and through many different assessments we had multiple opportunities to reflect and discover other disciplines. At our practicum, we work with several other healthcare professionals and it was beneficial to be able to see how each profession works together as a team. Recognizing other interdisciplinary roles is critical to working effectively in all fields.</p>
                                                <Divider />
                                            <Question3 />
                                                <p>My expectations for the program were quite limited originally, as I found out soon after starting. I knew I enjoyed working with people, being in the hospital setting and I expected a focus on anatomy and basic diagnostic imaging. The program surprised me by being so much more than I anticipated. We work with many different healthcare professionals, and in many different settings such as the OR, emergency department, and fluoroscopy. Our scope of practice expands much further than I expected, giving us the opportunity to be a part of critical interventions. Overall the program has more than met my expectations in many ways.</p>
                                                <Divider />
                                            <Question4 />
                                                <p>Our program has a large amount of group work, we often are encouraged to work with our classmates both online and in labs. We have had a number of classes stress the importance of collaborating inter-professionally with other healthcare members. Additionally, during our clinical practicum, we get hands-on experience working with numerous different healthcare professionals.</p>
                                                <Divider />
                                            <Question5 />
                                                <p>The instructors of the MRAD program have been incredibly supportive and readily available for our cohort. One thing that might have made our journey easier for many students would have been occasional check-ins on our cohort’s mental health. It was a difficult time adjusting to online learning and starting at new hospitals during a pandemic. Although our instructors were always there to support us when needed, if it had been addressed as a group more openly people who were struggling might have felt less alone..</p>
                                                <Divider />
                                            <Question6 />
                                                <p>In our program, our instructors or our site-specific clinical instructors would be our only mentors. The program instructors even when they are not actively teaching us were always open to having conversations via zoom or in person. Both clinical instructors and program instructors shared their personal experiences in the field with us which significantly helped our skills.</p>
                                                <Divider />
                                            <Question7 />
                                                <p>My advice to future students is to try and stay organized! Throughout the two-year program, there is a heavy workload and at the end, there's a national exam. It's extremely beneficial to have organized notes to look back on for when you need to review specific topics prior to your exam. Additionally, I think it's a really good idea to take notes during your clinical experience. There will be endless opportunities for learning new tricks and tips from different healthcare workers, so it can be nice to have something to reflect back on.</p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        <h2 className={classes.pageSubTitle}>Interview with a Health Care Assistant Program Student</h2>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            <Question1 />
                                                <p>The HCAP is a program designed to increase availability of Health Care Assistants in the health sector of BC. The program combines theoretical learning with skills practice in Camosun’s outstanding lab facilities, to prepare students for clinical placements that give several months of real-world experience leading up to a return-of-service year e.g. within long-term care facilities or community.</p>
                                                <Divider />
                                            <Question2 />
                                                <p>A typical school week consists of attendance at the new, purpose-built Campbell Health and Wellness Centre on the Interurban Campus in Victoria. Class starts at 8:30 and runs to 2:20 with a 40 minute break for lunch. There is an AM and PM session covering courses such as Healing, Introduction to Practice, Communication as well as Practical Skills twice a week and the option of additional practice in labs that are available daily. Course content includes study of body systems, common ailments and effects of aging in all aspects of life including physical and mental health. The principal text is Canadian and designed for support workers; it is supplemented by in-person skills demonstration and learning as well as Powerpoint presentations prepared by the instructors and integrating short informational videos.</p>
                                                <Divider />
                                            <Question8 />
                                                <p>It is thought by many that the current pressures on the health care sector in combination with the aging population means there will be ever greater need not only for health care sector employees, but for those in the sector to be willing to take on higher level skills to accommodate for the increasing level of need. At the same time, the HCAP establishes clear and detailed boundaries regarding scope of practice for the HCA role versus that of LPN, RN supervisor, etc. Therefore, it is important both to be clear on the limits of the training as well as to align all levels of training to ensure there are opportunities or pathways for progress such as “bridging” programs that enable those who are capable, qualified and motivated to continue their learning journey to the level of their ability and interest. Similarly, the use of consistent standards, vocabulary and learning expectations across disciplines will facilitate participation in, and movement across sectors in support of better care for all.</p>
                                                <Divider />
                                            <Question3 />
                                                <p>The program has more than met my expectations in all regards. We have had the benefit of excellent instruction by people who are knowledgeable, approachable, and passionately interested in care for the elderly. They are encouraging and aspiring students to step up to the challenge of a career in a sector that is struggling to meet the level and extent of demand in the public sector. As a class, we have nominated our two primary instructors for recognition for excellence in collaboration and innovation in education.</p>
                                                <Divider />
                                            <Question4 />
                                                <p>The HCAP provides opportunities for collaboration on several levels. First, there is the group work undertaken with classmates/future coworkers. Group work occurs both on the theoretical and practical sides of learning as there are multiple group assignments and presentations as well as mandatory collaboration in lab sessions to ensure the ability to work and communicate effectively as part of a team. In addition, the placements in various facilities throughout Victoria provide a further opportunity to “drop in” to established teams and learn to fit in using flexibility and good will.</p>
                                                <Divider />
                                            <Question5 />
                                                <p>The HCAP makes learning as easy as could be expected – everything, right down to scrubs and texts, is covered by the program meaning participants can focus on their schoolwork and labs instead of worrying about supplementing income with work on the side. Instructors are readily available in person and by email to support learning and answer any questions or issues that arise. It is the next steps (or “where to from here?”) aspects which could benefit from further development and clarification as those who discover a passion for the field of health care are often keen to further their skills development and knowledge. However, even if they have no desire to go further, the wider community of care will benefit from an influx of well-trained HCA’s eager to return to the world of work with their new skills and new-found professional orientation.</p>
                                                <Divider />
                                            <Question6 />
                                                <p>Leanne Robb, the program leader, is a natural mentor not only to students but to her fellow faculty members; some are young and developing, others are older but can learn from her teaching style which readily connects/resonates with students regardless of their age, orientation, sex, etc. She is quite beloved by all.</p>
                                                <Divider />
                                            <Question7 />
                                                <p>In general, I would encourage those who are younger or less experienced not to underestimate the value of this opportunity and to take full advantage of this 8-month opportunity followed by 12 months return of service. Those who are just out of high school may not know how rare it is to receive such extensive employer-paid training. Those who have not had a lot of experience with formal education may not realize how rare it is to have the door opened and the path eased for entry.</p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        <h2 className={classes.pageSubTitle}>Interview with a Certified Medical Laboratory Assistant Student</h2>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            <Question1 />
                                                <p>I would describe it as a medical trade, because pretty much everything that we learn is super hands-on, and it’s drilled into our heads over and over by practice over new learning. It’s most of the same stuff that we are either elaborating on or practicing physically.</p>
                                                <Divider />
                                            <Question2 />
                                                <p>So for right now, it looks like Monday and Tuesday lab days, pretty intense full-on, hands-on clinical practice. Thursdays we do a full day online which is mostly just lecture material and peer-review type stuff.</p>
                                                <Divider />
                                            <Question3 />
                                                <p>My expectations were a lot lower in terms of how quickly we would get into doing phlebotomy, so honestly it exceeded my expectations. The online days are very collaborative and helpful, in my previous online courses it's been me alone in my room trying to figure out the material as I go, whereas everybody is so collaborative and helpful both online and in-person. Socially, the program has exceeded my expectations and the content has exceeded my expectations because they’ve made it a lot more basic than working in healthcare is.
                                                Highlights for ways to cope with mental health in various educational programs and in coping with interprofessional collaboration. The delivery method of the program has made it easy to cope with any mental health things I’m going through. I have more than enough time as long as I stay on my time management, to either reach out to the instructors to let them know I’m going through something personal or something to do with one of our assignments. We always have lots of time to reach out and connect with someone to support us. All of our instructors have let us know multiple times that if we ever need to reach out, they’re always there, and they’re always there to support us as long as we give them due time.
                                                Aside from that, I just say, being really open and honest with people and letting them know what you’re going through, you’ll always find support in that.
                                                </p>
                                                <Divider />
                                            <Question4 />
                                                <p>Our program is split into groups anyways, A and B groups, so we have really gotten to know the specific people in our group. Soon we’re going to mix up the groups so that everybody has an opportunity to collaborate with the other students in the program, so I think that implementation of the mixing of groups is great.
                                                And honestly for me, working with my group, group chats all the way. They’re the best way to keep in touch with everybody.</p>
                                                <Divider />
                                            <Question5 />
                                                <p>Making D2L pages more accessible, and the layout of those pages. Often there’s content listed under two separate pages and there’s multiple things listed under both pages that contradict each other and I find myself reaching out a lot to confirm things.
                                                The instructors are doing their best, it’s hard to offer up those suggestions when you don’t know what you would do to fix it.It’s a tough question cause all of our instructors are rad, and if we needed something they would 100% accommodate it. For the most part I don’t think anybody is struggling with our instructors not being available or not having resources made available.</p>
                                                <Divider />
                                            <Question6 />
                                                <p>Yeah I did! Marion Taylor. I love her. She is just the cutest little person ever. I ask her questions about her career as a lab assistant and the different places she’s worked, and she gives me the purest, most honest feedback about her experiences and she is so great.</p>
                                                <Divider />
                                            <Question7 />
                                                <p>Practice your time management and be ready for when the third week starts. That’s when things start getting crazy and you have a million things lined up. Keep really organized lists of things you need to do and try to chip away daily instead of trying to tackle it all at one time.
                                                That’s one thing I learned for sure, I’m now a chip away student rather than a Sunday-night-midnight-grind student.</p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="5">
                                        <h2 className={classes.pageSubTitle}>Interview with a Bachelor of Science Nursing Student</h2>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>
                                            <Question1 />
                                                <p>The Camosun College and UVIC BSN program is an in-depth and comprehensive training program combining nursing theory with practical nursing skills. I would describe it as a fast-paced environment with your peers, where you will be challenged and asked to push yourself to your absolute limit. You will be taught advanced nursing techniques and will be required to display that proficiency to the highest degree. You will also explore the emotional, psychological, cultural, socioeconomic, and societal considerations involved in caring for another human being.</p>
                                                <Divider />
                                            <Question2 />
                                                <p>Depending on if you proactively take electives before the scheduled semesters, your workload can range from five to seven classes per semester (at least in the first year). I was fortunate enough to have gone to university beforehand, so a lot of introductory requirements were already fulfilled, thus my first year consisted of five classes each semester. I am fortunate to have a well-designed delivery of classes; two days a week my classes don’t start till after lunch, but the remaining days I’m up quite early. Regardless of class start times or duration, I dedicate a minimum of eight hours to nursing per day. If I only have two hours of class time, then I’m attempting to devote six hours to studying or working ahead on papers or presentations. In total, I try and allocate 40 hours per week to the program. Treat this program as a full-time job and I guarantee you will not fall behind, feel overwhelmed, or exhaust yourself. In saying that, I want to emphasize that once my eight hours are up, I shut off my academic brain and ensure I’m dedicating time to self-care or relaxation. Finding your balance and what works for you should be the priority.</p>
                                                <Divider />
                                            <Question8 />
                                                <p>First off, I would like to define interdisciplinary education. My understanding, in nursing, would be an approach to teaching individuals by encompassing as many perspectives and points of expertise to ensure a more holistic and broader understanding of caring for others. I feel that interdisciplinary teaching is represented in the BSN program through the examination of a deeper understanding and sensitivity of culture, considering unobserved influences when assessing a client’s health (healthcare cannot be based on just the biomedical model), sharing of experiences, and expertise by our instructors (the majority still practicing as nurses, while teaching), and encouraging interdisciplinary collaboration (by encompassing a multi-perspective approach to healthcare, there is a higher potential for progression of public and individual health).</p>
                                                <Divider />
                                            <Question3 />
                                                <p>My awareness of how much energy and time this program would require was very high. Even so, as a mature student returning to school after 15 years in the workforce, nothing quite prepares you for the intensity of the schooling. I really don’t want to scare people off with my tales of exhaustion, because the program truly is amazing. The point I’m trying to make is you can’t really prepare for the schooling, but the college has so many options for student support and academic assistance, (and you really do get what you put in), you’re bound to be successful.</p>
                                                <Divider />
                                            <Question4 />
                                                <p>Throughout the BSN program, I have worked with other students in small groups, volunteered in public health clinics, and taught health promotion classes to grade school children. There have been challenges and opportunities to learn from each experience. From those opportunities, I’ve definitely developed valuable collaborative skills that can enhance any individual's communication abilities. The most prominent method would be listening to absorb, not listening to respond. By being able to process the information being delivered to me with more clarity and reflection, I can offer more comprehensive and confident responses.</p>
                                                <Divider />
                                            <Question5 />
                                                <p>Given the workload of everyone involved and the limited time, I find it difficult to think about squeezing more resources or assistance into what the college and instructors already provide. Everyone is doing their best and giving it their all. If I have to give an answer. Reduce the complexity of the conceptual and ethereal parts of nursing theory. I find that a lot of literature and published content has the intention of impressing the reader instead of conveying the foundational understanding of the subject. Several of these authors and researchers are verbose to the point of causing students' eyes to glaze over…</p>
                                                <Divider />
                                            <Question6 />
                                                <p>No, I never asked for help, because I didn't really feel that anyone was worried about me. However, certain instructors were more friendly and concerned about the students, others just kept their distance (as if they didn't care about anyone's private life). 
                                                I fondly remember Liz Morch and Leta Zaleski, when I talk to them, they transmit sweetness, but I did not feel close enough or confident enough to ask for help.</p>
                                                <Divider />
                                            <Question7 />
                                                <p>The program is intense, but if you work hard, you should allow time to play too. Self-care is something that has to be acknowledged and addressed, by doing this you will come out at the end of this four-year program happy, healthy, and sane. Engage in socializing with your friends and family, get into a workout routine, sleep in on Saturdays, and binge some TV shows every now and then for heaven's sake. You’re working hard to make the world a better place, treat yourself. </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </>
                    </div>
        </div>
    )
};
export default Interviews