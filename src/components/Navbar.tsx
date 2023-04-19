import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import * as FaIcons from 'react-icons/fa'
import { Container } from 'react-bootstrap'

const NavbarStyled = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 3.5rem;
    background-color: #f3da6a;
`

const NavbarHeaderStyled = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    margin-left: 20rem
    font-size: 2.0rem;
    color: #ffffff;
`
interface NavbarProps
{
    navbarHeader: string
}

function Navbar({ navbarHeader }: NavbarProps)
{
    return (
        <>
            <Container>
                <NavbarStyled>
                    <NavbarHeaderStyled>{navbarHeader}</NavbarHeaderStyled>
                </NavbarStyled>
            </Container>
        </>
    )
}

export default Navbar