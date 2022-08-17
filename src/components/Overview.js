import React from 'react';
import {NavLink} from "react-router-dom";
import "../styles/style.css";
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";
import { useEffect } from "react";


const Overview = () => {
  useEffect(() =>{
    let preveiwContainer = document.querySelector('.products-preview');
    let previewBox = preveiwContainer.querySelectorAll('.preview');
    
    document.querySelectorAll('.products-container .product').forEach(product =>{
      product.onclick = () =>{
        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview =>{
          let target = preview.getAttribute('data-target');
          if(name == target){
            preview.classList.add('active');
          }
        });
      };
    });
    
    previewBox.forEach(close =>{
      close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
      };
    })
  },[])
    return (
      <div>
      <h2 className="myH2">NOS PRODUITS</h2>
      
{/* Produit */}


<div className="container">
<div className="search">
<li className="search-box">
   <input className="input-box" type="text" placeholder="Search..."/>
</li>
</div>
<div className="products-container">

<div className="product" data-name="p-1">
<img src="bed.jpg" alt=""/>
<h3>Produit</h3>
<div className="price">Prix</div>
</div>

<div className="product" data-name="p-2">
<img src="bed.jpg" alt=""/>
<h3>Produit</h3>
<div className="price">Prix</div>
</div>

<div className="product" data-name="p-3">
<img src="bed.jpg" alt=""/>
<h3>Produit</h3>
<div className="price">Prix</div>
</div>

<div className="product" data-name="p-4">
<img src="bed.jpg" alt=""/>
<h3>Produit</h3>
<div className="price">Prix</div>
</div>

<div className="product" data-name="p-5">
<img src="bed.jpg" alt=""/>
<h3>Produit</h3>
<div className="price">Prix</div>
</div>

<div className="product" data-name="p-6">
<img src="bed.jpg" alt=""/>
<h3>Produit</h3>
<div className="price">Prix</div>
</div>

</div>

</div>
<div className="products-preview">

<div className="preview" data-target="p-1">
<i className="fas fa-times"></i>
<img src="bed.jpg" alt=""/>
<h3>Produit</h3>
<div className="stars">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star-half-alt"></i>

</div>
<p>Details du produit</p>
<div className="price">Prix</div>
<div className="buttons">
<NavLink to="/paiement">  <a href="#" className="buy">COMMAND</a></NavLink>
<NavLink to="/cart">   <a href="#" className="cart">Add to Cart</a></NavLink>
</div>
</div>

<div className="preview" data-target="p-2">
<i className="fas fa-times"></i>
<img src="bed.jpg" alt=""/>
<h3>Produit</h3>
<div className="stars">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star-half-alt"></i>

</div>
<p>Details du produit</p>
<div className="price">Prix</div>
<div className="buttons">
<NavLink to="/paiement"> <a href="#" className="buy">COMMAND</a></NavLink>
<NavLink to="/cart"> <a href="#" className="cart">Add to Cart</a></NavLink>
</div>
</div>

<div className="preview" data-target="p-3">
<i className="fas fa-times"></i>
<img src="bed.jpg" alt=""/>
<h3>Produit</h3>
<div className="stars">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star-half-alt"></i>

</div>
<p>Details du produit</p>
<div className="price">Prix</div>
<div className="buttons">
<NavLink to="/paiement">  <a href="#" className="buy">COMMAND</a></NavLink>
<NavLink to="/cart"> <a href="#" className="cart">Add to Cart</a></NavLink>
</div>
</div>

<div className="preview" data-target="p-4">
<i className="fas fa-times"></i>
<img src="bed.jpg" alt=""/>
<h3>Produit</h3>
<div className="stars">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star-half-alt"></i>

</div>
<p>Details du produit</p>
<div className="price">Prix</div>
<div className="buttons">
<NavLink to="/paiement"> <a href="#" className="buy">COMMAND</a></NavLink>
<NavLink to="/cart">  <a href="#" className="cart">Add to Cart</a></NavLink>
</div>
</div>

<div className="preview" data-target="p-5">
<i className="fas fa-times"></i>
<img src="bed.jpg" alt=""/>
<h3>Produit</h3>
<div className="stars">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star-half-alt"></i>

</div>
<p>Details du produit</p>
<div className="price">Prix</div>
<div className="buttons">
<NavLink to="/paiement">  <a href="#" className="buy">COMMAND</a></NavLink>
<NavLink to="/cart">  <a href="#" className="cart">Add to Cart</a></NavLink>
</div>
</div>

<div className="preview" data-target="p-6">
<i className="fas fa-times"></i>
<img src="bed.jpg" alt=""/>
<h3>Produit</h3>
<div className="stars">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star-half-alt"></i>

</div>
<p>Details du produit</p>
<div className="price">Prix</div>
<div className="buttons">
<NavLink to="/paiement"> <a href="#" className="buy">COMMAND</a></NavLink>
<NavLink to="/cart"> <a href="#" className="cart">Add to Cart</a></NavLink>
</div>
</div>

</div>
</div>
    );
   
};


export default Overview;

// Made by Feudjio brand
// E-mail: brandonfeudjio8@gmail.com