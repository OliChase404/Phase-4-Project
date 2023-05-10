import React from "react";
import Home from "./Home";
import Login from "./Login";
import CreateAccountForm from "./CreateAccountForm";
import Messages from "./Messages"
import Profile from "./Profile";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
      <Home/>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/login' element ={<Login />} />
        <Route path='/createaccount' element ={<CreateAccountForm />} />
        <Route path='/profile' element ={<Profile />} />
        <Route path='/messages' element ={<Messages />} />
      </Routes>
      <Login/>
    </div>
  );
}

export default App;
