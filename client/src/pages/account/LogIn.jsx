import React, { Component } from 'react';
import { Form, Button, Container, Alert, Card } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import './Style.css';

const API_URL = process.env.REACT_APP_API;

export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errorMsg: '',
            redirect: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const username = e.target.username.value
        const password = e.target.password.value
        const users = JSON.parse(localStorage.getItem('users'));// get from local storage
        let userExist = false;
        for (let user of users) {
            if (user.username === username && user.password === password) {
                localStorage.setItem('user', JSON.stringify(user));
                this.setState({ redirect: true });
                userExist = true;
                break;
            }
        }
        if (!userExist)
            this.setState({ errorMsg: <Alert variant="danger" className="text-center">Invalid Username Or Password</Alert> });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/home" />
        }
        return (
            <Container className="card-container mt-5">
                <Card style={{ width: '28rem' }}>
                    <h2>Log In To Your Account.</h2>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            {this.state.errorMsg}
                            <Form.Group className="mb-3">
                                <Form.Label className="label">Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter username"
                                    name="username"
                                    onChange={this.handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="label">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.handleChange}
                                    required
                                />
                            </Form.Group>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
                                <label className="form-check-label" for="autoSizingCheck">
                                    Remember me
                                </label>
                            </div>
                            <Button id="button" variant="danger" type="submit">
                                Log In
                            </Button>
                            <div className=" text-center">Don't have an account?</div>
                            <div className=" link row text-center">
                                <Link to={'/signUp'} className="link">Register Here</Link>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
};
