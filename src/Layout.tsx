import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import { Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function Layout() {
  return (
    <div className="App">
     <Header />
      <Outlet />
    </div>  
  );
}

export default Layout;
