import React from "react";
import Navbar from "./components/header/navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import AuthLayout from "./components/Auth/AuthLayout";
import RedirectIfUser from "./components/RedirectUser/RedirectIfUser";
import Dashboard from "./pages/Dashboard ";
import Myorder from "./pages/Myorder";
import Wishlist from "./pages/Wishlist";
import Myprofile from "./pages/Myprofile";
import Signup from "./pages/Signup";
import Modal from "./modal/Modal";


const App = () => {
  return (
    <>
      
      <Navbar />
      <Routes>
      <Route path="/" element=<Home/>/>
        <Route path="contact" element=<Contact /> />
        <Route path="about" element= <About/> />
        <Route path="order" element= <Myorder/> />
        <Route path="wishlist" element= <Wishlist /> />
        <Route path="profile" element= <Myprofile/> />
        <Route
          path="dashboard"
          element=<Dashboard />
          loader={({ request }) =>
            fetch("/api/dashboard.json", {
              signal: request.signal,
            })
          }
        />
        <Route element=<AuthLayout/>>
          <Route path="login" element=<Login /> loader={RedirectIfUser} />
          <Route path="logout" action={Logout} />
          <Route path="signup" action={Signup} />
          <Route path="login" action={Login} />
        </Route>
     
      </Routes>
       
    </>
  );
};

export default App;
