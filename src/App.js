import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cookies from 'js-cookie';
import Login from "./pages/login";
import Register from "./pages/register";
import Subscribe from "./pages/subscribe";
import KelolaLagu from "./pages/kelola-lagu";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const isLoggedIn = Cookies.get("isLoggedIn");
    const isAdmin = Cookies.get("isAdmin");
    if (isLoggedIn) {
      setIsLoggedIn(true);
      setIsAdmin(isAdmin && isAdmin === "true" ? true : false);
    }
  }, [setIsAdmin, setIsLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/subscribe" element={isLoggedIn && isAdmin ? <Subscribe /> : <Login />} />
        <Route path="/kelola-lagu" element={isLoggedIn && !isAdmin ? <KelolaLagu />: <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
