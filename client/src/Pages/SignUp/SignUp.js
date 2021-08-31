import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Card, Form, Button, Container} from 'react-bootstrap'
import {useMutation} from '@apollo/client'
import Auth from '../../utils/auth'
import {ADD_USER} from '../../utils/mutations'

const SignUp = () => {
    const [userFormData, setUserFormData] = useState({username: '', email: '', password: ''})
    const [addUser, {error}] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUserFormData({...userFormData, [name]: value})
    }

    const handleFormSubmit = async(event) => {
        event.preventDefault();
        try {
            const mutationResponse = await addUser({
                variables: {
                    email: userFormData.email,
                    password: userFormData.password,
                    username: userFormData.username,
                },
            })
            const token = mutationResponse.data.addUser.token
            Auth.login(token)
        } catch (err) {
            console.log(err)
        }
    }
    let history = useHistory()
    const redirect = () => {
        history.push('/login')
    }
    return (
        <>
            <Container className="content" id="SignUpContain">
                <div className="d-flex justify-content-center">
                    <Card classNem="signupForm" id="cardLogin">
                        <Card.Title class="card-header">
                            <h3>Sign Up</h3>
                        </Card.Title>
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control 
                                    name="username"
                                    value={userFormData.username}
                                    onChange={handleInputChange}
                                    type="username" 
                                    placeholder="Enter Username" 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    name="email"
                                    onChange={handleInputChange}
                                    value={userFormData.email}
                                    placeholder="Enter email" 
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    name="password"
                                    type="password"
                                    value={userFormData.password}
                                    onChange={handleInputChange}
                                    placeholder="Password" 
                                />
                            </Form.Group>
                            <Button 
                                variant="light" 
                                type="submit"
                                className="signupBtn">
                                Create
                            </Button>
                        </Form>
                        {error ? (
                            <div>
                                <p className="error">The provided credentials are taken.</p>
                            </div>
                        ) : null}
                        <Button onClick={redirect} variant="light" className="loginBtn" type="submit">
                                Already have an account? Login here.
                        </Button>
                    </Card>
                </div>
            </Container>
        </>
    )
}

export default SignUp
