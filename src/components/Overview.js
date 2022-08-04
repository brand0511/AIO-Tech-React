import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {NavLink} from "react-router-dom";
import "../styles/style.css";



const Overview = () => {  

   const [data, setData] = useState([]);
 
   useEffect(()=>{
      axios.get("https://api.genuka.com/2021-10/companies/details/1")
      .then((res)=> setData(res.data));
   }, [])
   
  
    return (
       <div></div>
    );
   
};


export default Overview;

// Made by Feudjio brand
// E-mail: brandonfeudjio8@gmail.com