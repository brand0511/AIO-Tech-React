import React from 'react';
import {NavLink} from "react-router-dom";
import "../styles/style.css";
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";
import { useEffect } from "react";

ùioio
const Header = () => {
    useEffect(() =>{
  $('.navTrigger').click(function () {
     $(this).toggleClass('active');
     console.log("Clicked menu");
     $("#mainListDiv").toggleClass("show_list");
     $("#mainListDiv").fadeIn();
 
 });
    },[]);
     return (
        <div>
        <nav className="nav">
        <div className="container">
            <div className="logo">
                <NavLink to="/"> 
                <a href="#">Your Logo</a>
                </NavLink>
            </div>
            <div id="mainListDiv" className="main_list">
            <ul>
                
                <li><NavLink to="/"> <a href="index.html">Accueil</a></NavLink></li>
                
                <NavLink to="/products">
                <li>
                    <a href="Description.html">Produits
                    </a>
                </li>
                </NavLink>
                <NavLink to="/login">
                <li><a href="connexion.html">Login</a></li>
                </NavLink>
                
                <li><NavLink to="/signup"><a href="Signup.html">Signup</a></NavLink></li>
                
                <NavLink to="/cart">
                <li><a href="cart.html"><i className="fa fa-shopping-cart" aria-hidden="false"></i></a></li>
                </NavLink>
            </ul>
            </div>
            <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
    <section class="home">
    </section>
        </div>
        
    );
    
}; 

export default Header;


// Made by Feudjio brand
// E-mail: brandonfeudjio8@gmail.com