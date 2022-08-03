import React from 'react';
import {NavLink} from "react-router-dom";
import "../styles/style.css";

const Footer = () => {
    return (
        <div>
             {/* Footer */}
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Genuka's Template is easy to use is an initiative  to help the upcoming programmers with the code. <br/>Genuka focuses on providing the most efficient templates as the code wants to be simple. <br/>We will help people to have their own online market environment .</p>
          </div>

          
          <div className="col-xs-6 col-md-3">
            <h6>Links</h6>
            <ul className="footer-links">
              <li><NavLink to="/"><a href="#">Contact Us</a></NavLink></li>
              <li><NavLink to="/"><a href="#">Contribute</a></NavLink></li>
              <li><NavLink to="/"><a href="#">Privacy Policy</a></NavLink></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by...<NavLink to="/"><a href="#">Entreprise</a>.</NavLink>
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
            <NavLink to="/">  <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li></NavLink>
            <NavLink to="/">  <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li></NavLink>
            <NavLink to="/">  <li><a className="dribble" href="#"><i className="fa fa-instagram"></i></a></li></NavLink>
            <NavLink to="/">  <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li></NavLink>   
            </ul>
          </div>
        </div>
      </div>
</footer>
        </div>
    );
};

export default Footer;

// Made by Feudjio brand
// E-mail: brandonfeudjio8@gmail.com