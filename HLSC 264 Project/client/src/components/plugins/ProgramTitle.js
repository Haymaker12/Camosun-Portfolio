import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'

const Styles = makeStyles(() => ({
    card: {
        backgroundColor: '#E0E0E2',
        boxShadow: "0 1px 5px 0 rgba(0 0 0 / 16%), 0 1px 2px 0 rgba(0 0 0 / 26%)",
        border: 'none',
        padding: '20px',
        minHeight: '150px',
    },
    pageTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '30pt',
        fontFamily: 'Helvetica',
    },
}));

const ProgramTitle = ({ program }) => {

    const classes = Styles();

    return (
        <div>
            <h1 className={classes.pageTitle}>{program.programName}</h1>
            <Divider />
            <br/>
        </div>
    )
}


export default ProgramTitle;