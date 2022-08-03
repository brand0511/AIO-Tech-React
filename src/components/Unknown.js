import React from 'react';
import {NavLink} from "react-router-dom";
import "../styles/404.css";

const Unknown = () => {
    return (
        <div>
            <body className='body1'>
            <div id="notfound">
		<div classname="notfound">
			<div classname="notfound-404">
				<h1>404</h1>
			</div>
			<h2>Oops! Nothing was found</h2>
			<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable. 
                <NavLink to="/"><a href="index.html">Return to homepage</a></NavLink></p>
			<div classname="notfound-social">
			<NavLink to="/"	><a href="#"><i classname="fa fa-facebook"></i></a></NavLink>
            <NavLink to="/"	><a href="#"><i classname="fa fa-twitter"></i></a></NavLink>
            <NavLink to="/"	><a href="#"><i classname="fa fa-pinterest"></i></a></NavLink>
            <NavLink to="/"	><a href="#"><i classname="fa fa-google-plus"></i></a></NavLink>
			</div>
		</div>
	</div>
            </body>
            
        </div>
    );
};

export default Unknown;