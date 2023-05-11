import React from "react";
import Home from "./Home/Home";
import LoginSignup from "./Login Signup/LoginSignup";
import Messages from "./Social/Messages";
import Profile from "./Home/Profile";
import NavBar from "./NavBar/NavBar";
import Notifications from "./Home/Notifications";
import Performance from "./Home/Performance";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate } from "react-router-dom";
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
    if(user){
      <Navigate to="/" />
    }
  }, []);

  if (!user) return <LoginSignup setUser={setUser} />



  return (
    <div className="App">
      <div>
        
        <Routes>
          <Route path="/" element={<><NavBar setUser={setUser} /> <Home /></>} />
          <Route path="/profile" element={<><NavBar setUser={setUser} /> <Profile /> </>} />
          <Route path="/messages" element={<><NavBar setUser={setUser} /> <Messages /> </>} />
          <Route path="/notifications" element={<><NavBar setUser={setUser} /> <Notifications /> </>} />
          <Route path="/performance" element={<><NavBar setUser={setUser} /> <Performance /> </>} />
          {/* <Route path="/login" element={<Login setUser={setUser} />} /> */}
          {/* <Route path="/home" element={<><NavBar setUser={setUser} /> <Home /></>} /> */}
          {/* <Route path="/createaccount" element={<CreateAccount />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
