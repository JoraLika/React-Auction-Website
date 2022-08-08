import React, { Component } from 'react';
import { Form, Button, Container, Alert, Card, Dropdown } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import './Style.css';

export default class SignUp extends Component {
    //Local Storage
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                username: '',
                password: '',
                confirmPassword: '',
                wallet: 1000,
                // role: '',
            },
            errorMsg: '',
            redirect: false
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit = (e) => {
        const { user } = this.state;
        // const username = user;

        // Validation
        if ((user.confirmPassword !== user.password)) {
            this.setState({ errorMsg: <Alert variant="danger" className="text-center">Password And Confirm Password Do Not Match</Alert> });
            return;
        }
        // if (user.username > 0) {
        //     this.setState({ errorMsg: <Alert variant="success" className="text-center">This Username Is Already Taken</Alert> });
        //     return;
        // }


        let users = JSON.parse(localStorage.getItem('users'));
        if (users == null) users = [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        this.setState({ redirect: true });
        // this.setState({ errorMsg: <Alert variant="success" className="text-center">User Added Successfully</Alert> });

        if (users.find(user => user.username === this.state.user.username)) {
            this.setState({ errorMsg: <Alert variant="success" className="text-center">This Username Is Already Taken</Alert> });
            return;
        }

        e.preventDefault();


    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/logIn" />
        }

        const { user, errorMsg } = this.state;
        return (
            <>
                <Container className="card-container mt-5">
                    <Card style={{ width: '28rem' }}>
                        <h2>Sign Up To Your Account.</h2>
                        <Card.Body>
                            {errorMsg}
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter Email"
                                        name="email"
                                        value={user.email}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Username"
                                        name="username"
                                        minLength='3'
                                        maxLength='20'
                                        value={user.username}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={user.password}
                                        onChange={this.handleChange}
                                        minLength='8'
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        value={user.confirmPassword}
                                        onChange={this.handleChange}
                                        minLength='8'
                                        required
                                    />
                                </Form.Group>

                                <Button type="submit" name="action" variant="danger">
                                    Sign Up
                                </Button>
                                <div className=" text-center">Already have an account?</div>
                                <div className="row text-center">
                                    <Link to={'/logIn'} className="link">Login Here</Link>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </>
        );
    };

}
