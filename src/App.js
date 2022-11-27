import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Subscribe from "./pages/subscribe";
import KelolaLagu from "./pages/kelola-lagu";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

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
