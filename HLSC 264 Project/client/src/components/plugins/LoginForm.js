import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { makeStyles } from '@material-ui/core/styles'

const FormStyle = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    form: {
        backgroundColor: '#E0E0E2',
        boxShadow: "0 1px 5px 0 rgba(0 0 0 / 16%), 0 1px 2px 0 rgba(0 0 0 / 26%)",
        border: 'none',
    },
    formButton: {
        display: 'flex',
        justifyContent: 'center',
    },
    cardDiv: {
        padding: '20px 5px',
        fontFamily: 'Verdana',
    },
}));

const LoginForm = ({ setShowForm }) => {
    const classes = FormStyle();

    // this will make the login state box become sad panda when a return fails to work.
    const [isInvalid, setIsInvalid] = React.useState(false)
    const [errorMsg, setErrorMsg] = React.useState("");

    const [validated, setValidated] = React.useState(false);
    const [cNumber, setCNumber] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleNumber = e => {
        setIsInvalid(false);
        let userNumber = e.target.value;
        setCNumber(userNumber)
    }

    const handleEmail = e => {
        setIsInvalid(false);
        let userEmail = e.target.value;
        setEmail(userEmail);
    }

    const handlePassword = e => {
        setIsInvalid(false);
        let userPass = e.target.value;
        setPassword(userPass);
    }

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        // //event handlers for the form
        e.preventDefault();

        var body = JSON.stringify({ cNumber: cNumber, email: email, password: password });
        let asyncCall = async () => {
            const res = await fetch("/api/auth", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                body: body

            });
            // This is where the data is stored
            const data = await res.json();
            return data;
        }
        try {
            asyncCall()
                .then(response => {
                    if (!response.token) {
                        setErrorMsg(response.errors[0].msg);
                        setIsInvalid(true);
                        return;
                    }
                    setValidated(true);
                    return response;
                })
                .then(data => {
                    if (typeof(data) != "undefined") {
                        setShowForm(false);
                    }
                }
            )
        } catch (err) {
            console.log("API ERROR: " + err);
        }
    };

    return (
        <div className={classes.cardDiv}>
            <Card className={classes.form}>
                <Card.Body>
                    <Card.Title className="text-center">Log in here</Card.Title>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group>
                            <Form.Label>Student Number</Form.Label>
                            <Form.Control required isInvalid={isInvalid} type="text" placeholder="CXXXXXXX" onChange={handleNumber} />
                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control required isInvalid={isInvalid} type="email" placeholder="Enter email" onChange={handleEmail} />
                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            <Form.Text className="text-muted">email@example.com</Form.Text>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control required isInvalid={isInvalid} type="password" placeholder="Password" onChange={handlePassword} />
                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            <Form.Text className="text-muted">Password must be at least 8-10 characters long.</Form.Text>
                        </Form.Group>

                        <div className={classes.formButton}>
                            <Button variant="warning" type="submit">Submit</Button>
                        </div>
                    </Form>
                    <Card.Body>
                        {isInvalid ?
                            <Card.Text className="bg-danger text-white text-center rounded py-2">{errorMsg}</Card.Text>
                            :
                            <div></div>
                        }
                    </Card.Body>
                </Card.Body>
            </Card>
        </div>
    );
}

export default LoginForm;
