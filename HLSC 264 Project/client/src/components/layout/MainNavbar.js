import React from 'react'
import Header from '../plugins/Header'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { makeStyles } from '@material-ui/core/styles'
import Container from 'react-bootstrap/Container'

const NavStyles = makeStyles(() => ({
    nav: {
        backgroundColor: '#91BE37',
    },
    navLink: {
        color: 'rgba(255,255, 255, 1)!important',
        '&:hover': {
            color: "rgba(255, 255, 255, 0.5)!important",
        },
        fontFamily: "Helvetica",
    },
    toggle: {
        marginLeft: 'auto',
        color: 'rgba(255,255,255,1)!important',
        borderColor: 'rgba(255,255,255,1)!important',
    },
    dropdown: {
        backgroundColor: 'rgba(255,255,255,0)!important',
        border: 'none',
        boxShadow: 'none!important',
    },
    scrolled: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '100'
    }
}));

const MainNavbar = () => {
    const classes = NavStyles();
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 280) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let navbarClasses = [""]

    if (scrolled) {
        navbarClasses.push(classes.scrolled)
    }

    return (
        <div>
            <Header />
            <header className={navbarClasses.join("")}>
                <Navbar variant="dark" expand="lg" className={classes.nav}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className={classes.toggle} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Container>
                            <Nav className="mr-auto">
                                <Nav.Link href="/" className={classes.navLink}>HOME</Nav.Link>
                                <Nav.Link href="/programs" className={classes.navLink}>PROJECTS</Nav.Link>
                                <Nav.Link href="/about-the-festival" className={classes.navLink}>ABOUT THE FESTIVAL</Nav.Link>
                                <Nav.Link href="/keynote" className={classes.navLink}>KEYNOTE SPEAKER</Nav.Link>
                                <Nav.Link href="/sponsors" className={classes.navLink}>SPONSORS</Nav.Link>
                                <Nav.Link href="/workshops" className={classes.navLink}>WORKSHOPS</Nav.Link>
                                <Nav.Link href="/credits" className={classes.navLink}>CREDITS</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </div>
    )
}

export default MainNavbar