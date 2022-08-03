import React from 'react';
import {NavLink} from "react-router-dom";
import "../styles/style.css";
import initPage from '../styles/code';


const Header = () => {
    initPage();
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
                <NavLink to="/">
                <li><a href="index.html">Accueil</a></li>
                </NavLink>
                <NavLink to="/products">
                <li>
                    <a href="Description.html">Produits
                    </a>
                </li>
                </NavLink>
                <NavLink to="/login">
                <li><a href="connexion.html">Login</a></li>
                </NavLink>
                <NavLink to="/signup">
                <li><a href="Signup.html">Signup</a></li>
                </NavLink>
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