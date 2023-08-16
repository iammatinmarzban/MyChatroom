import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import CreateAccount from "./Components/CreateAccount";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="log-in" element={<Login />} />
      </Routes>
      <div className="container">
        <div className="header flex justify-between text-[#C4D9CA] mt-1 items-center">
          <div className="left flex justify-start items-center  ">
            <h1 className="p-4 font-['Grenze'] text-[64px] text-white m-l-0 not-italic self-center">
              My Chatroom
            </h1>
          </div>
          <div className="right flex justify-end items-center">
            <button className="py-4 px-8 mr-4  border-[1px] border-[#8DB2A1] rounded-md">
              Sign-in Sign-in
            </button>
            <button className="py-4 px-8 ml-4  border-[1px] border-[#8DB2A1] rounded-md">
              Sign-up Sign-up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
