import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import { useState } from "react";
import { auth } from "./components/firebase";
import SignInwithPhone from "./components/SignInwithPhone";
import MainLandingPage from "./components/MainLandingPage";
import PageNotFound from "./components/PageNotFound";
import MyProfile from "./components/Pages/MyProfile";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route
                path="/"
                element={user ? <Navigate to="/MainLandingPage" /> : <MainLandingPage />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/SignInwithPhone" element={<SignInwithPhone />} />
              <Route path="/MainLandingPage" element={<MainLandingPage />} />
              <Route path="/MyProfile" element={<MyProfile />} />
              <Route path="*" element={<PageNotFound />}/>
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
