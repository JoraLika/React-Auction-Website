import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import './Main.css';

export default class NavComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
        this.logOut = this.logOut.bind(this);
    }
    logOut() {
        localStorage.setItem('user', false);
        this.setState({ redirect: true });
    }

    render() {
        let { redirect } = this.state;
        if (redirect) return <Redirect to={"/logIn"} />;

        const user = JSON.parse(localStorage.getItem('user'));
        return (
            <Navbar
                id='navbar-container'
                className='navbar sticky-top navbar-dark'
                expand='lg'
            >
                <Container className='container-fluid'>
                    <Navbar.Brand href='#' className='navbar-brand ' id='navbar-logo'>
                        Auction
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className="navLinks mr-auto">
                            <Link id="link" to={"/home"} style={{ textDecoration: 'none', color: '#fff' }}>
                                Home
                            </Link>
                        </Nav>
                        <Nav className="navLinks mr-auto">
                            <Link id="link" to={"/products"} style={{ textDecoration: 'none', color: '#fff' }}>
                                Products
                            </Link>
                        </Nav>

                        <Nav className='ms-auto'>
                            <Nav className='btn'>
                                <>
                                    <div className='btn btn-outline-secondary mx-2 disabled' name="email">
                                        {user.email} | ${user.wallet}
                                    </div>
                                </>
                            </Nav>
                            <Nav className='btn'>
                                <>
                                    <div
                                        onClick={this.logOut}
                                        className='btn btn-light mx-2'
                                        type="submit"
                                        name="action"
                                    >
                                        LOG OUT
                                    </div>
                                </>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
