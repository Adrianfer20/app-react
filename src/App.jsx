// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute'; // Importa el componente PrivateRoute
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';




const Dashboard = () => {
  return <h2>Dashboard Page (Protected)</h2>;
};


const App = () => {
  return (
    <Router basename="/app-react">
      <div className='min-h-screen flex text-blue-950'>
        <Navbar/>

        <main className='w-full bg-blue-100 p-2'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
};

export default App;

