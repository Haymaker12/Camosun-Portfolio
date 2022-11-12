import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
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

const RegisterForm = ({ className, setShowForm }) => {

    const classes = FormStyle();

    const [isInvalid, setIsInvalid] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("");
    const [validated, setValidated] = React.useState(false);

    const [cNumber, setCNumber] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    //event handlers for the form
    const handleSubmit = e => {
        e.preventDefault();

        var body = JSON.stringify({cNumber: cNumber, email: email, password: password});
        let asyncCall = async() => {
            const res = await fetch("/api/users", {
            
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
    }

    const handleNumber = e => {
        let userNumber = e.target.value;
        setCNumber(userNumber)
    }

    const handleEmail = e => {
        let userEmail = e.target.value;
        setEmail(userEmail);
    }

    const handlePassword = e => {
        let userPass = e.target.value;
        setPassword(userPass);
    }

    //allow submit
    let enableSubmit = false;
    if (cNumber.length > 1 && email.length > 1 && password.length > 1) {
        enableSubmit = true;
    }


    return (
        <div className={classes.cardDiv}>
            <Card className={classes.form}>
                <Card.Body>
                    <Card.Title className="text-center">Register here</Card.Title>
                    <Form noValidate validated={validated}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Student Number</Form.Label>
                            <Form.Control type="text" required isInvalid={isInvalid} placeholder="CXXXXXXX" onChange={handleNumber} />
                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required isInvalid={isInvalid} placeholder="Enter email" onChange={handleEmail} />
                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            <Form.Text className="text-muted">email@example.com</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required isInvalid={isInvalid} placeholder="Password" onChange={handlePassword} />
                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            <Form.Text className="text-muted">Password must be at least 8-10 characters long.</Form.Text>
                        </Form.Group>
                        <div className={classes.formButton}>
                            {enableSubmit
                                ? <Button variant="warning" type="submit" onClick={handleSubmit} >Submit</Button>
                                : <Button variant="warning" type="submit" disabled >Submit</Button>
                            }
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
    )
}

const StyledRegisterForm = styled(RegisterForm)`
    font-family: Calibri, sans-serif;
`


export default StyledRegisterForm;
