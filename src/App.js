import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Paiement from "./pages/Paiement";
import Collection from "./pages/Collection";

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<Notfound/>} /> 
      <Route path="/products" element={<Products/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/paiement" element={<Paiement/>} />
      <Route path="/collection" element={<Collection/>} />
    </Routes>
    </BrowserRouter>
  );
};


export default App;

// Made by Feudjio brand
// E-mail: brandonfeudjio8@gmail.com