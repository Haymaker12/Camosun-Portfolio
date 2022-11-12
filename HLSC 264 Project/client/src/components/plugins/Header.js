import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../../assets/images/Full_Logo.png'
import NewWays from '../../assets/images/Interproffessional_Education_Title_Quote.png'
import Grid from '@material-ui/core/Grid'
import Nav from 'react-bootstrap/Nav'

const HeaderStyle = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    lightGray: {
        backgroundColor: '#E0E0E2',
    },
    darkGray: {
        backgroundColor: '#5A5A5A',
    },
    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    newWays: {
        minWidth: '2.54cm',
        width: '100%',
        maxWidth: '15cm',
        padding: '20px',
    },
    logo: {
        minWidth: '2.54cm',
        width: '100%',
        maxWidth: '10cm',
        padding: '40px',
    },
}));

export default function Header() {
    const classes = HeaderStyle();

    return (
        <div className={classes.root}>
            <Grid container spacing={0} justify="center" alignItems="center" className={classes.darkGray}>
                <Grid item xs={12} sm={4} className={classes.lightGray}>
                    <div className={classes.flex}>
                        <Nav.Link href="/">
                            <img src={Logo} alt="Logo" className={classes.logo} />
                        </Nav.Link>
                    </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <div className={classes.flex}><img src={NewWays} alt="Future health professionals learning with, from and about each other to improve collaborate and the quality of care" className={classes.newWays}></img></div>
                </Grid>
            </Grid>
        </div>
    )
}