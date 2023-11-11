import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Team from "./components/Team";
// import FormEditProduct from "./components/FormEditProduct";
import FormProduct from "./components/formproduct";
import Ecommerce from "./components/Ecommerce";
import Post from "./components/Post";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<FormProduct />} />
        <Route path="/team" element={<Team />} />
        <Route path="/eval" element={<Home />} />
        <Route path="/ecom" element={<Ecommerce />} />
        <Route path="/post" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="edit/:id" element={<FormEditProduct />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
