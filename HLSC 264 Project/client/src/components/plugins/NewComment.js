import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { makeStyles } from '@material-ui/core/styles'

const FormStyle = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    form: {
        fontSize: '10pt',
    },
    cardBody: {
        padding: '0.8rem',
    },
    cardDiv: {
        padding: '20px 0px',
        fontFamily: 'Verdana',
        maxWidth: '700px',
    },
    name: {
        maxWidth: '300px',
        fontSize: '10pt',
        fontFamily: 'Verdana',
        wordBreak: 'break-word',
    },
    textarea: {
        fontSize: '10pt',
        fontFamily: 'Verdana',
        padding: '0.25rem 0.5rem',
        width: '100%',
        borderRadius: '1rem',
        marginBottom: '3px',
        backgroundColor: '#E0E0E2',
        border: 'none',
        '&:focus': {
            backgroundColor: 'rgba(1, 1, 1, 0.06)!important',
            border: 'none',
            boxShadow: 'none',
        },
        wordBreak: 'break-word',
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
    main: {
        maxWidth: '700px',
    },
    top: {
        display: 'flex',
    },
    btn: {
        borderRadius: '0.75rem',
    },
}));

const LimitedTextarea = ({ value, limit, whenChanged }) => {
    const classes = FormStyle();
    const [content, setContent] = React.useState("");

    // Use Effects needed to rerender DOM ONLY when a new value for 'value' is detected.  
    React.useEffect(() => {
        let completeString = value.slice(0, limit);
        setContent(completeString);
    }, [value]);

    return (
        <>
            <Form.Control
                as="textarea"
                onChange={whenChanged}
                value={content}
                placeholder="Comment here"
                className={classes.textarea}
            />
        </>
    );
};

const LimitedText = ({ value, limit, whenChanged }) => {
    const classes = FormStyle();
    const [content, setContent] = React.useState("");

    // Use Effects needed to rerender DOM ONLY when a new value for 'value' is detected.  
    React.useEffect(() => {
        let completeString = value.slice(0, limit);
        setContent(completeString);
    }, [value]);

    return (
        <>
            { <Form.Control
                type="text"
                value={content}
                onChange={whenChanged}
                placeholder="Name"
                className={classes.textarea}
            />}
        </>
    );
};

//comment box component 
const NewComment = ({ projID }) => {
    var Filter = require('bad-words');
    var customFilter = new Filter({ placeHolder: 'no' });
    customFilter.addWords('viagra', 'casino', 'casinos', 'loan', 'loans', 'spins', 'cialis', 'cock', 'weebly', 'cards', 'credit', 'dating', 'milf', 'bitcoin', 'RSS', 'walmart', 'blow', 'blows', 'sneed');


    const classes = FormStyle();

    const [name, setName] = React.useState('');
    const [comment, setComment] = React.useState('');

    // Handles the name. If clause required because if empty string ("") is passed into filer.clean(), app will crash.
    const handleName = e => {
        if (e.target.value) {
            setName(customFilter.clean(e.target.value));
        }
        else {
            setName("");
        }
    }

    // Handles the comments. If clause required because if empty string ("") is passed into filer.clean(), app will crash.
    const handleComment = e => {
        if (e.target.value) {
            setComment(customFilter.clean(e.target.value));
        }
        else {
            setComment("");
        }
    }

    const handleSubmit = e => {
        //function to send the comments to the database

        var body = JSON.stringify({ project: projID, comment: comment, name: name });
        let asynccall = async () => {
            const res = await fetch(`/api/comments`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                body: body
            })
                .then(response => {
                    if (response.status == 200) {
                    }
                    else {
                        throw new Error(response.status);
                    }
                })
        }
        try {
            asynccall()
        }
        catch (err) {
            alert(err.message);
        }
    }

    let enableSubmit = false;
    if (name.length > 0 && comment.length > 0) {
        enableSubmit = true;
    }

    return (
        <div className={classes.cardDiv}>
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            <form className={classes.form} >
                <div className={classes.div}>
                    <div className={classes.top}>
                        <div className={classes.icon}>
                            <i className="fas fa-user fa-lg"></i>
                        </div>
                        <div className={classes.main}>
                            <LimitedText limit={40} value={name} whenChanged={handleName} />
                            <LimitedTextarea limit={280} value={comment} whenChanged={handleComment} />
                            <div className={classes.btnRent}>
                            <div class="g-recaptcha" data-sitekey="6LcqGfQeAAAAAErf51Q9kK9BlA7y8XHMEUUt693A"></div>
                                {enableSubmit
                                    ? <Button className={classes.btn} type='submit' size="sm" value='Submit' onClick={handleSubmit}>Enter</Button>
                                    : <Button className={classes.btn} type='submit' size="sm" value='Submit' disabled>Enter</Button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default NewComment