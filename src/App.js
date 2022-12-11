import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Blogs from './pages/Blogs';
import Careers from './pages/Careers';
import Leadership from './pages/Leadership';
import Products from './pages/Product';
import Solutions from './pages/Solutions';
import Support from './pages/Support';

function App() {
return (
	<Navbar />
);
}

export default App;

