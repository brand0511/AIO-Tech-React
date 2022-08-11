import React from 'react';
import {NavLink} from "react-router-dom";
import "../styles/style.css";
import "jquery-ui-dist/jquery-ui";
import { useEffect } from "react";

const Sidebar = () => {

    useEffect(() =>{
        const body = document.querySelector('body'),
        sidebar = body.querySelector('nav'),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");
  
  
  toggle.addEventListener("click" , () =>{
      sidebar.classList.toggle("close");
  });
  
  searchBtn.addEventListener("click" , () =>{
      sidebar.classList.remove("close");
  });
  
  modeSwitch.addEventListener("click" , () =>{
      body.classList.toggle("dark");
      
      if(body.classList.contains("dark")){
          modeText.innerText = "Light mode";
      }else{
          modeText.innerText = "Dark mode";
          
      }
  });
    },[]);

    return (
        <div>
             <nav className="sidebar close">
         <header>
             <div className="image-text">
                 <span className="image">
                     <img src="logo.png" alt=""/>
                 </span>
 
                 <div className="text logo-text">
                     <span className="name">Logo</span>
                     <span className="profession">Entreprise</span>
                 </div>
             </div>
 
             <i className='bx bx-chevron-right toggle'></i>
         </header>
 
         <div className="menu-bar">
             <div className="menu">
 
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
             </div>
 
             <div className="bottom-content">
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
                     <div className="sun-moon">
                         <i className='bx bx-moon icon moon'></i>
                         <i className='bx bx-sun icon sun'></i>
                     </div>
                     <span className="mode-text text">Mode sombre</span>
 
                     <div className="toggle-switch">
                         <span className="switch"></span>
                     </div>
                 </li>
                 
             </div>
         </div>
 
     </nav>
        </div>
    );
};

export default Sidebar;


// Made by Feudjio brand
// E-mail: brandonfeudjio8@gmail.com