import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

interface NavItemProps
{
    active: boolean;
    path: string;
    css: string;
}

const StyledNavItem = styled.div<{ active: boolean }>`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${active => (active ? "white" : "#9FFFCB")};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;

const NavIcon = styled.div`
`;


const handleClick = () =>
{

};

function NavItem({ active, path, css }: NavItemProps)
{
    return (
        <StyledNavItem active={active}>
            <Link to={path} className={css} onClick={handleClick}>
                <NavIcon></NavIcon>
            </Link>
        </StyledNavItem>
    );
}

export default NavItem