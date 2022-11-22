import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
