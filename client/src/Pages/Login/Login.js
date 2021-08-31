import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Form, Card, Button, Container} from 'react-bootstrap'
import Auth from '../../utils/auth'
import {useMutation} from '@apollo/client'
import {LOGIN} from '../../utils/mutations'

const Login = () => {
    const [userFormData, setUserFormData] = useState({email: '', password: ''})
    const [login, {error}] = useMutation(LOGIN)

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUserFormData({...userFormData, [name]: value})
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: {email: userFormData.email, password: userFormData.password}
            })
            const token = mutationResponse.data.login.token
            Auth.login(token)
        } catch (err) {
            console.log(err)
        }
    }
    let history = useHistory()
    const redirect = () => {
        history.push('/signup')
    }
    return (
        <>
            <Container className="content" id="loginContain">
                    <div className="d-flex justify-content-center">
                        <Card id="cardLogin">
                            <Card.Title class="card-header">
                                <h3 style={{fontFamily: "Work Sans, sans-serif"}}>Login</h3>
                            </Card.Title>
                            <Form onSubmit={handleFormSubmit} className="loginForm">
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        name="email" 
                                        value={userFormData.email} 
                                        onChange={handleInputChange}
                                        type="email" 
                                        placeholder="Enter email" 
                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        name="password"
                                        value={userFormData.password}
                                        onChange={handleInputChange}
                                        placeholder="Password" 
                                    />
                                </Form.Group>
                                {error ? (
                                    <div>
                                        <p className="error">The provided credentials are incorrect</p>
                                    </div>
                                ) : null}
                                <Button 
                                    disabled={!(userFormData.email && userFormData.password)}
                                    variant="light"
                                    className="loginBtn"
                                    type="submit">
                                    Submit
                                </Button>
                            </Form>
                            <Button onClick={redirect} variant="light" className="signupBtn"type="submit">
                                    Need User? Make an account here.
                            </Button>
                        </Card>
                    </div>
                </Container>
        </>
    )
}

export default Login
