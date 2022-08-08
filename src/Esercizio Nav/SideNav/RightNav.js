import React from 'react'
import styled from 'styled-components'
import {NavLink as Link } from 'react-router-dom'

const NavLink = styled(Link) `
  padding:10px 10px;
  text-decoration: none;  
  color: #fff;

       @media (max-width: 768px ) {
              color: #fff;
              text-decoration:none;
              
              
              &:hover {
                background-color:#0180fa ;
              }
            }
`

const Ul = styled.ul`
      display: flex;
      list-style: none;
      flex-flow: row nowrap;
      text-align: center;


      @media (max-width: 768px)  {
        flex-flow: column nowrap;
        background-color: #0d2538;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 165px;
        padding-top:3.5rem;
        transform: transform 0.3s ease-in-out;
      }
`

function RightNav({open}) {
  return (
  <Ul open={open}>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='Contact-us'>Contacts</NavLink>
    <NavLink to='SignIn'>SignIn</NavLink>
    <NavLink to='SignUp'>SignUp</NavLink>
  </Ul>
  )
}

export default RightNav
