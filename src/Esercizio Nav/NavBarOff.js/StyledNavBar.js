import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background-image: linear-gradient(to bottom right, red, yellow);
    height: 80px;
    display: flex;
    //justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;

    /*3rd nav */
    justify-content: flex-start;
`
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding:0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
     @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0px;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
        transition: all 0.2 ease-in-out;
     }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    /*margin-right: -24px;*/

    /*secondnav*/
    /*margin-right: 24px;*/

    //3rd nav-down: ;
    width: 100vh;
    white-space: nowrap;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    //3rd nav
    justify-content: flex-end;
    width: 100vw;

    @media screen and (max-width:768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4x;
    background-color: rgb(88, 0 , 255);
    padding: 10px 22px;
    color: #fff;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background:#fff;
        color: #010606;
    }
`