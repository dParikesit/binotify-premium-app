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
import KelolaLagu from "./pages/kelola-lagu";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/kelola-lagu" element={<KelolaLagu />} />
      </Routes>
    </Router>
  );
}

export default App;
