import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider';
import Card from 'react-bootstrap/Card'
import { YearSelect } from '../plugins/YearSelect'

const CardStyles = makeStyles(() => ({
  pageTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '30pt',
    fontFamily: 'Helvetica',
  },
  cardDiv: {
    padding: '20px 5px',
    fontFamily: 'Verdana',
  },
  cardText: {
    border: 'none',
    padding: '20px 5px',
  },
}));

const Credits = () => {

  const classes = CardStyles();

  const [selectedYear, setSelectedYear] = React.useState("2022")
  const [creditContent, setCreditContent] = React.useState("")

  React.useEffect(() => {
    if (selectedYear === "2021") {
      setCreditContent(
        <Row>
          <Col>
            <div className={classes.cardText}>
              <Card.Text><b>We would like to thank the developers who contributed to the I.D.E. website for
                the 2021 festival</b>
              </Card.Text>
              {contributors.map((ele, index) => (
                <Card.Text id={index}>{ele}</Card.Text>))}
            </div>
          </Col>
        </Row>

      )
    } else if (selectedYear === "2022") {
      setCreditContent(creditContent2022)
    } else {
      setCreditContent("No content found here.")
    }
  }, [selectedYear]);


  const contributors = [
    "Yasmin Barroilhet - Design",
    "Kate Colwell - Frontend Development",
    "Michael Fuller - Communications",
    "Victoria Grandfield - Design",
    "Lucius Hall - Backend Development",
    "Ryan Heal - Testing",
    "Nicholas Hing - Testing",
    "Mark Lei - Communications",
    "Yaroslav (Leon) Leontenko - Fullstack Development",
    "Emily Van Akker - Frontend Development",
    "Devin Williamson - Communications",
    "Tony Woolven - Frontend Development",
    "Maggie Woytowich - Communications",
    "Connor Yutani-Patterson - Frontend Development",
    "Fraser Macallum - Fullstack Development",
    "Chris Preston - Frontend Development",
    "Mateo Strasdas - Frontend Development",
    ""
  ]

  const creditContent2022 = (() => {
    return (
      <div>
        <Row>
          <Col>
            <div className={classes.cardText}>
              <b>We would like to thank the HLSC 264 Interprofessional
                Practices students from the Interactive Media Developer &amp;
                Certified Medical Laboratory Assistant Programs for their contributions
                to the 2022 IDE Festival Website:</b>
            </div>
          </Col>
        </Row>
        <ul>
          <li><b>Haonan Zhang</b> - Project Coordinator/Team Lead </li>
          <li><b>Chris Goldammer</b> - IDE Festival Steering Committee Liaison  </li>
          <li><b>Aleshia Orr &amp; Eda Gulmus</b> - Digital Marketing &amp; Festival Promotions </li>
          <li><b>Ken Kanajanaprayut &amp; Brandon Bouchard</b> - Site-change Assessment and Refinement</li>
          <li><b>Scott Jones &amp; Austin Garat</b> - Site-Versioning/Historical Presentations</li>
          <li><b>Aaron Romanczak &amp; Marina Daw</b> - Sponsorship &amp; Donations</li>
          <li>Festival Theme Interviews of HHS Dean &amp; Program Students</li>
          <ul>
            <li><b>Carolyn Walker </b></li>
            <li><b>Timilu Fast</b></li>
            <li><b>Seanna-Lee Tuson</b></li>
            <li><b>Leticia Mieles Azan</b></li>
            <li><b>Rachael Benjamin</b></li>
            <li><b>Kylynn Salmon</b></li>
            <li><b>Jamie Ferguson</b></li>
          </ul>
          <li><b>Gabe Iturralde</b> - Security Implementation</li>
          <li><b>Celeste Pierre &amp; Tyana Hanson</b> - Content Moderation</li>

        </ul>
        <h4>2022 IDE Student Festival Website Improvement Deliverables:</h4>

        <b>Site Interface &amp; Submission Form Testing &amp; Documentation</b>
        <ul>
          <li>Rachel Benjamin</li>
          <li>Kylynn Salmon</li>
          <li>Haonan Zhang</li>
          <li>Carolyn Walker</li>
          <li>Brandon Bouchard</li>
        </ul>
        <b>Promote IDE Student Festival Theme and Purpose to Users</b>
        <ul>
          <li>Tyana Hanson</li>
          <li>Timilu Fast</li>
          <li>Scott Jones</li>
          <li>Eda Gulmus</li>
          <li>Aaron Romanczak</li>
        </ul>
        <b>Integrated Site Feedback Survey</b>
        <ul>
          <li>Senna-Lee Tuson</li>
          <li>Leticia Mieles Azan</li>
          <li>Ken Kanjanaprayut</li>
          <li>Celeste Pierre</li>
          <li>Austin Garat</li>
        </ul>
        <b>Participation, Engagement &amp; Interactivity</b>
        <ul>
          <li>Marina Daw</li>
          <li>Jamie Ferguson</li>
          <li>Game Iturralde</li>
          <li>Chris Goldammer</li>
          <li>Aleshia Orr</li>
        </ul>

        <p>The Dev Team would like to extend a special thanks to Fraser Macallum &amp; Tersia Fagan for their support.</p>

      </div>

    )
  })()


  return (
    <div>
      <Row>
        <Col xs={12} lg={8} xl={9}>
          <div className={classes.cardText}>
            <YearSelect setYear={setSelectedYear} />
          </div>
          <div >
            <h1 className={classes.pageTitle}>Credits</h1>
            <Divider />

            <Row>
              <Col>
                {creditContent}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Credits;