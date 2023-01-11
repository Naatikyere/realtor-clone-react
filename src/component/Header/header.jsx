import React from "react";

import '../Header/Header.components.css';

import { useLocation,useNavigate } from "react-router-dom";

export default function Header(){
    const location = useLocation();
    const navigate = useNavigate();
    //create a function for location
    function pathLocation(route){
        if(route===location.pathname){
            return true
        }

    }
    return(
        <div>
     <header className="Header">
<div>
    <img className="logo"
     src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" />
    </div>
        <div>
            <ul className='links'>
            <li className={`${pathLocation('/')  && "location"}`}>Home</li>
            <li>Offers</li>
            <li>Sign in</li>
            </ul>
        </div>
        </header>
        </div>
        
    )}