import React from 'react'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';


function TopBar()
{
    return (
        <>
            <Navbar expand="lg">
                <Navbar.Brand href="/">Header</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href='/'>User Profile</Navbar.Brand>
            </Navbar>
        </>
    );
}

export default TopBar