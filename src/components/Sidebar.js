import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {NavLink} from "react-router-dom";
import "../styles/style.css";

const Sidebar = () => {

    return (
        <body>
             <nav className="sidebar">
         <header>
             <body className="image-text">
                 <span className="image">
                     <img src="logo.png" alt=""/>
                 </span>
 
                 <body className="text logo-text">
                     <span className="name">Logo</span>
                     <span className="profession">Entreprise</span>
                 </body>
             </body>
 
             <i className='bx bx-chevron-right toggle'></i>
         </header>
 
         <body className="menu-bar">
             <body className="menu">
 
                 <li className="search-box">
                     <i className='bx bx-search icon'></i>
                     <input type="text" placeholder="Search..."/>
                 </li>
 
                 <ul className="menu-links">
                     
                     <li className="nav-link">
                        <NavLink to="/collection"><a href="Description.html">
                             <i className='bx bx-bar-chart-alt-2 icon'></i>
                             <span className="text nav-text">Lits</span>
                         </a></NavLink>
                         
                     </li>
                     <li className="nav-link">
                     <NavLink to="/collection">
                        <a href="Description.html">
                            <i className='bx bx-bar-chart-alt-2 icon'></i>
                            <span className="text nav-text">Meubles</span>
                        </a></NavLink>
                    </li>
                    <li className="nav-link">
                    <NavLink to="/collection">
                     <a href="Description.html">
                         <i className='bx bx-bar-chart-alt-2 icon'></i>
                         <span className="text nav-text">Lustre</span>
                     </a></NavLink>
                 </li>
 
                    
 
                 </ul>
             </body>
 
             <body className="bottom-content">
               <li className="nav-link">
               <NavLink to="/cart">
                  <a href="cart.html">
                      <i className='bx bx-cart icon'></i>
                      <span className="text nav-text">Panier</span>
                  </a></NavLink>
              </li>
                 <li className="">
                 <NavLink to="/">
                     <a href="index.html">
                         <i className='bx bx-log-out icon' ></i>
                         <span className="text nav-text">Logout</span>
                     </a></NavLink>
                 </li>
                 <li className="nav-link">
                 <NavLink to="/">
                  <a href="index.html">
                      <i className='bx bx-home-alt icon' ></i>
                      <span className="text nav-text">Accueil</span>
                  </a></NavLink>
              </li>

 
                 <li className="mode">
                     <body className="sun-moon">
                         <i className='bx bx-moon icon moon'></i>
                         <i className='bx bx-sun icon sun'></i>
                     </body>
                     <span className="mode-text text">Mode sombre</span>
 
                     <body className="toggle-switch">
                         <span className="switch"></span>
                     </body>
                 </li>
                 
             </body>
         </body>
 
     </nav>
        </body>
    );
};

export default Sidebar;


// Made by Feudjio brand
// E-mail: brandonfeudjio8@gmail.com