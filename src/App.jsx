// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute'; // Importa el componente PrivateRoute

import Navbar from './components/Navbar/Navbar';
import NotFoundPage from './pages/NotFoundPage';
import HomePages from './pages/HomePages';
import LoginPages from './pages/LoginPages';
import DocumentacionPages from './pages/DocumentacionPages';




const styles = {
  container: 'h-screen flex flex-col md:flex-row justify-between bg-slate-200 overflow-hidden',
  main: 'w-full min-h-screen flex flex-col justify-between overflow-y-auto'
}



const App = () => {
  return (
    <Router basename="/app-react">
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<PrivateRoute element={HomePages} />} />
            <Route path="/documentacion" element={<PrivateRoute element={DocumentacionPages} />} />
            <Route path="/login" element={<LoginPages />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
};

export default App;

