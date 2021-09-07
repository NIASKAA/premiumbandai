import React, {useState} from 'react'
import {send} from 'emailjs-com'
import {Form} from 'react-bootstrap';
import {AwesomeButtonProgress} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import './styles.css'

const Support = () => {
    let SERVICE = process.env.REACT_APP_SERVICE
    let USER = process.env.REACT_APP_USER
    const [toSend, setToSend] = useState({
        fromName: '',
        replyTo: '',
        message: ''
    });
    
    const next = (e) => {
        e.preventDefault();
        send(SERVICE, 'template_j66lou7', toSend, USER)
        .then((response) => {
            console.log('Success!', response.status, response.text);
        })
        .catch((err) => {
            console.log('Failed', err)
        })
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value})
    }
    return (
        <>
        <h3>Contact</h3>
            <Form onSubmit={next} className="contact-form">
                <Form.Group className="mb-3 name" controlId="nameInput">
                    <Form.Label className="title">Name</Form.Label>
                    <Form.Control onChange={handleChange} type="name" name="fromName" value={toSend.fromName} placeholder='name...'/>
                </Form.Group>
                <Form.Group className="mb-3 email" controlId="emailInput">
                    <Form.Label className="title">Email address</Form.Label>
                    <Form.Control onChange={handleChange} type="email" name="replyTo"value={toSend.replyTo} placeholder="example@example.com..." />
                </Form.Group>
                <Form.Group className="mb-3 message" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="title">Message</Form.Label>
                    <Form.Control onChange={handleChange} value={toSend.message} name="message" as="textarea" rows={3} placeholder="message..."/>
                </Form.Group>
                <AwesomeButtonProgress
                    size='medium'
                    type='primary'
                    disabled={!(toSend.fromName && toSend.replyTo && toSend.message)}
                    action={(element, next) => {
                        setTimeout(() => {
                            next()
                            }, 300);
                    }}
                >
                    Send it!
                </AwesomeButtonProgress>
            </Form>
        </>
    )
}

export default Support
