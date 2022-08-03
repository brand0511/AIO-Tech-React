import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/main.css";

const Checkout = () => {
    return (
        <div>
            <body>
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
            <div className="card card-4">
                <div className="card-body">
                    <h2 className="title">Paiement</h2>
                    <form method="POST">
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Nom</label>
                                    <input className="input--style-4" type="text" name="first_name"/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Adresse de Livraison</label>
                                    <input className="input--style-4" type="text" name="last_name"/>
                                </div>
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Jour de Livraison</label>
                                    <div className="input-group-icon">
                                        <input className="input--style-4 js-datepicker" type="text" name="birthday"/>
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Mode de paiement</label>
                                    <div className="p-t-10">
                                        <label className="radio-container m-r-45">Visa
                                            <input type="radio" checked="checked" name="gender"/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container">Master-card
                                            <input type="radio" name="gender"/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container">Paypal
                                            <input type="radio" name="gender"/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container">Cash
                                            <input type="radio" name="gender"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Email</label>
                                    <input className="input--style-4" type="email" name="email"/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Numero de Telephone</label>
                                    <input className="input--style-4" type="text" name="phone"/>
                                </div>
                            </div>
                        </div>
                        <div className="input-group">
                            <label className="label">Orange/MTN</label>
                            <div className="rs-select2 js-select-simple select--no-search">
                                <select name="subject">
                                    <option disabled="disabled" selected="selected">Choose option</option>
                                    <option>Orange Money</option>
                                    <option>MTN MOMO</option>
                                    
                                </select>
                                <div className="select-dropdown"></div>
                            </div>
                        </div>
                        <div className="p-t-15">
                        <button className="btn btn--radius-2 btn--blue" type="submit">Valider</button>
                            <NavLink to="/cart"><a href="cart.html"><button className="btn btn--radius-2 btn--blue" type="submit">Rentrez au Panier</button></a></NavLink> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Jquery JS-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <!-- Vendor JS-->
    <script src="vendor/select2/select2.min.js"></script>
    <script src="vendor/datepicker/moment.min.js"></script>
    <script src="vendor/datepicker/daterangepicker.js"></script>

    <!-- Main JS-->
    <script src="js/global.js"></script> */}

</body>
        </div>
    );
};

export default Checkout;