import React, { createContext } from "react";
import Home from "./Home/Home";
import LoginSignup from "./Login Signup/LoginSignup";
import Messages from "./Social/Messages";
import Profile from "./Home/Profile";
import NavBar from "./NavBar/NavBar";
import Notifications from "./Home/Notifications";
import Performance from "./Home/Performance";
import { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate } from "react-router-dom";
import "../App.css";

export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState(null);
  const [campaigns, setCampaigns] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    if(user){
      <Navigate to="/" />
    }
  }, []);

  
  useEffect(() => {
    if (user && Object.hasOwn(user, "youtube")) {
      fetch(`/influencers/${user.id}/campaigns`)
        .then(resp => resp.json())
        .then(data => setCampaigns(data))
    } else if (user) {
      fetch(`/brands/${user.id}/campaigns`)
        .then(resp => resp.json())
        .then(data => setCampaigns(data))
    }
  }, [user])
  
  if (!user) return <LoginSignup setUser={setUser} />
  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
      <NavBar/>
        <Routes>
          <Route path="/profile" element={<Profile user={user}/>} />
          <Route path="/messages" element={<Messages user={user}/>} />
          <Route path="/notifications" element={<Notifications user={user}/>} />
          <Route path="/performance" element={<Performance user={user}/>} />
          {/* <Route path="/login" element={<Login setUser={setUser} />} /> */}
          {/* <Route path="/home" element={<><NavBar setUser={setUser} /> <Home /></>} /> */}
          {/* <Route path="/createaccount" element={<CreateAccount />} /> */}
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
