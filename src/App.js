import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import * as React from 'react';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/Profile";
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Offers" element={<Offers />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
   </Router>
  );
}
// eslint-disable-next-line
export default App;
