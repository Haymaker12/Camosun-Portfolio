import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'

const Style = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    name: {
        fontSize: '0.78rem',
        letterSpacing: '-0.5px',
    },
    comment: {
        fontSize: '1rem',
    },
    main: {
        padding: '0.25rem 0.5rem',
        border: '1px solid #ced4da',
        backgroundColor: '#E0E0E2',
        borderRadius: '1rem',
        maxWidth: '700px',
        wordBreak: 'break-word',
    },
    date: {
        fontSize: '0.7rem',
        fontFamily: 'Verdana',
        letterSpacing: '-0.5px',
        marginLeft: '45px',
    },
    icon: {
        backgroundColor: '#569099',
        height: '35px',
        width: '35px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 10px 0 0',
        color: 'white',
    },
    div: {
        fontSize: '10pt',
        fontFamily: 'Verdana',
        margin: '10px 0',
    },
    top: {
        display: '-webkit-inline-box',
    },
    scrollbox: {
        maxHeight: '300px',
        overflow: 'scroll',
    },
}));

const Comment = ({ comment, date, name }) => {
    const classes = Style();
    return (
        <div className={classes.div}>
            <div className={classes.top}>
                <div className={classes.icon}>
                    <i className="fas fa-user fa-lg"></i>
                </div>
                <div className={classes.main}>
                    <div className={classes.name}>{name ?? "Anonymous"}</div>
                    <div className={classes.comment}>{comment}</div>
                </div>
            </div>
            <div className={classes.date}>{date}</div>
        </div>
    )
};

const CommentList = ({ comments }) => {
    const classes = Style();
    //all the comments go into this state variable. 
    const commentsHere = { comments }
    
    if (commentsHere != undefined) {
        //return that shit 
        return (
            <div>
                <Divider />
                <div className={classes.scrollbox}>
                    {comments.map(comment =>
                        <Comment key={comment._id}{...comment} />
                    )}
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <p>No comments yet!</p>
            </div>
        )
    }
};

export default CommentList