import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import * as FaIcons from 'react-icons/fa'

import { SidebarData } from './SidebarData';


const NavbarStyled = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 3.5rem;
    background-color: #ffe700;
    color: #000;
    margin-bottom: 2%;
    z-index: 1;
`

const NavbarHeaderStyled = styled.div`
    display: flex;
    float:left;
    padding: 3rem;
    margin: 1rem;
    text-align: center;
    align-items: center;
`

const MenuIconOpen = styled(Link)`
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
    margin-left: 2rem;
    color: #0a58ca;
`

const MenuIconClose = styled(Link)`
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-right: 1rem;
    color: #0a58ca;
`

const SidebarMenu = styled.div<{ close: boolean }>`
    width: 250px;
    height: 100vh;
    background-color: #ff4f4f;
    position: fixed;
    top: 0;
    left: ${({ close }) => close ? '0' : '-100%'};
    transition: .6s;
    z-index:1;
`

const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 15%;
    padding: 0.5rem 0 1.25rem;
`

const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    color: #ffffff;

    &:hover {
        background-color: #ffffff;
        color: #000080;
        width: 100%;
        height: 100%;
        text-align: center;
        border-radius: 5px;
    }
`

interface SidebarProps
{
    navbarHeader: string
    children: JSX.Element
}

function Sidebar({ navbarHeader, children }: SidebarProps) 
{
    const [close, setClose] = useState(false)
    const showSidebar = () => setClose(!close)
    const NavbarHeaderIcon = () => { return children; }
    return (
        <>
            <NavbarStyled>
                <MenuIconOpen to="#" onClick={showSidebar}>
                    <FaIcons.FaBars />
                </MenuIconOpen>
                <NavbarHeaderStyled>
                    <NavbarHeaderIcon />
                    <h4 style={{
                        padding: '5px',
                        paddingTop: '10px',
                        paddingLeft: '10px',
                        fontSize: '1.5rem',
                        fontWeight: 'bolder',
                        color: '#115658'
                    }}> {navbarHeader}
                    </h4>
                </NavbarHeaderStyled>
            </NavbarStyled>


            <SidebarMenu close={close}>
                <MenuIconClose to="#" onClick={showSidebar}>
                    <FaIcons.FaTimes />
                </MenuIconClose>

                {SidebarData.map((item, index) =>
                {
                    return (
                        <MenuItems key={index}>
                            <MenuItemLinks to={item.path}>
                                {item.icon}
                                <span style={{ marginLeft: '16px' }}>{item.title}</span>
                            </MenuItemLinks>
                        </MenuItems>
                    )
                })}
            </SidebarMenu>
        </>
    )
}

export default Sidebar
