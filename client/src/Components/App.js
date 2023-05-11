import React from "react";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Messages from "./Social/Messages";
import Profile from "./Home/Profile";
import CreateAccount from "./Login/CreateAccount";
import NavBar from "./NavBar/NavBar";
import Notifications from "./Home/Notifications";
import Performance from "./Home/Performance";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "../App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<><NavBar /> <Home /></>} />
          <Route path="/profile" element={<><NavBar /> <Profile /> </>} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/performance" element={<Performance />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
