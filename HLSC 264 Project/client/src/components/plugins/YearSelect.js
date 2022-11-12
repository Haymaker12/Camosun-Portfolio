import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const CardStyles = makeStyles(() => ({
    yearSelectStyle: {
        textAlign: 'right',
    },
    yearSelectLabel: {
        fontWeight: 'bold',
        fontSize: '12pt',
        fontFamily: 'Helvetica',
        color: '#569099',
        paddingRight: '10px',
    },
}));
//year select dropdown for projects
//receives props from layout/projects.js
const YearSelect = (props) => {
    const classes = CardStyles();
    return (
        <div className={classes.yearSelectStyle}>
        <label for="yearSelect" id="yearSelect" className={classes.yearSelectLabel}>Select Year: </label>
            <select name="yearSelect" id="yearSelect" value={props.year} onChange={e=>props.setYear(e.target.value)}>
                <option defaultValue>2022</option>
                <option>2021</option>
            </select>
        </div>
    )
};
export {YearSelect}