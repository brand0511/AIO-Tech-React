import React from 'react';
import {NavLink} from "react-router-dom";
import "../styles/connexion.css";

const Connexion = () => {
    return (
        <div>
            <section className="container1 forms">
            <div className="form login">
                <div className="form-content">
                    <header>Login</header>
                    <form action="#">
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input"/>
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="Mot de passe" className="password"/>
                            
                        </div>

                        <div className="form-link">
                        <NavLink to="*"><a href="#" className="forgot-pass">Forgot password?</a></NavLink>
                        </div>

                        <div className="field button-field">
                            <button>Login</button>
                        </div>
                    </form>

                    <div className="form-link">
                        <span>Don't have an account? <NavLink to="/signup"><a href="Signup.html" className="link signup-link">Signup</a></NavLink></span>
                    </div>
                </div>

                <div className="line"></div>
            </div>

        </section>    
        </div>
    );
};

export default Connexion;