import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./Components/Login";
import CreateAccount from "./Components/CreateAccount";

import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<CreateAccount />} />
      </Routes>

      <nav>
        <ul>
          <li>
            <Link to={"/"}><Home/></Link>
          </li>
          <li>
            <Link to={"/log-in"}><Login/></Link>
          </li>
          <li>
            <Link to={"/sign-up"}><CreateAccount/></Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
