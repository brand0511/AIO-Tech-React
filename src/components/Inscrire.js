import React from 'react';
import {NavLink} from "react-router-dom";
import "../styles/signup.css";

const Inscrire = () => {
    return (
        <div>
            <section className="container1 forms">
            <div className="form login">
                <div className="form-content">
                    <header>Inscription</header>
                    <form action="#">
                    <div className="field input-field">
                            <input type="text" placeholder="Nom" className="input"/>
                        </div>
                        <div className="field input-field">
                            <input type="text" placeholder="Prenom" className="input"/>
                        </div>
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input"/>
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="Mot de passe" className="password"/>
                            
                        </div>
                        <div className="field input-field">
                            <input type="password" placeholder="Confirmer mot de passe" className="password"/>
                            
                        </div>

                        <div className="field button-field">
                            <button>Inscrire</button>
                        </div>
                    </form>

                    <div className="form-link">
                        <span>Already have an account?  <NavLink to="/login"><a href="connexion.html" className="link signup-link">Login</a></NavLink></span>
                    </div>
                </div>

                <div className="line"></div>
            </div>

        </section>    
        </div>
    );
};

export default Inscrire;