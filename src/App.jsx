// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'; // Importa el componente PrivateRoute

const Home = () => {
  return <h2>Home Page</h2>;
};

const About = () => {
  return <h2>About Page</h2>;
};

const Dashboard = () => {
  return <h2>Dashboard Page (Protected)</h2>;
};

const Login = () => {
  // Lógica de inicio de sesión aquí
  const handleLogin = () => {
    localStorage.setItem('authToken', '123456'); // Esto es solo un ejemplo, deberías manejar el token correctamente
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const App = () => {
  return (
    <Router basename="/app-react">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

