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
		<Route path='/home' element={<Home/>} />
		<Route path='/aboutus' element={<Aboutus/>} />
		<Route path='/products' element={<Products/>} />
		<Route path='/solutions' element={<Solutions/>} />
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/support' element={<Support/>} />
		<Route path='/careers' element={<Careers/>} />
    <Route path='/leadership' element={<Leadership/>}/>
  </Routes>
	</BrowserRouter>
);
}

export default App;

