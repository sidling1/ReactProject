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
	<BrowserRouter>
	<Navbar />
	<Routes>
		<Route path='/Home' element={<Home/>} />
		<Route path='/Aboutus' element={<Aboutus/>} />
		<Route path='/Products' element={<Products/>} />
		<Route path='/Solutions' element={<Solutions/>} />
		<Route path='/Blogs' element={<Blogs/>} />
		<Route path='/Support' element={<Support/>} />
		<Route path='/Careers' element={<Careers/>} />
    	<Route path='/Leadership' element={<Leadership/>}/>
	</Routes>
	</BrowserRouter>
);
}

export default App;

