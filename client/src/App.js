import React from "react";
import Home from "./Home";
import Login from "./Login";
import Messages from "./Messages"
import Profile from "./Profile";
import CreateAccount from "./CreateAccount";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/login' element ={<Login />} />
        <Route path='/profile' element ={<Profile />} />
        <Route path='/messages' element ={<Messages />} />
        <Route path='/createaccount' element ={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;
