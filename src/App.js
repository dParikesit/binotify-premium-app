import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Subscribe from "./pages/subscribe";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </Router>
  );
}

export default App;
