// Imports
import React from "react";
import { Routes, Route } from "react-router-dom";

// Get our environment variables, before imports use
// const dotenv = require('dotenv');
// dotenv.config();

// Components
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";

// Pages
import Home from "./pages/Home.js";
import Deposit from "./pages/Deposit.js";
import Withdrawal from "./pages/Withdrawal.js";

// Styles
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Deposit" element={<Deposit />} />
        <Route exact path="/Withdrawal" element={<Withdrawal />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
