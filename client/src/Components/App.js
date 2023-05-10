import React from "react";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Messages from "./Social/Messages";
import Profile from "./Home/Profile";
import CreateAccount from "./Login/CreateAccount";
import NavBar from "./NavBar/NavBar";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "../App.css";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/createaccount" element={<CreateAccount />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
