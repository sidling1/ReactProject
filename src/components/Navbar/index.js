import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../style/header.css";
import { useState } from "react";
import Dropdown from './Dropdown';


function Nav() {
  const [over,setOver] = useState(false);

  return (
    <nav>
      <ul>
        <li><NavLink to="Home" onMouseOver={()=>setOver(true)} onMouseOut={()=>setOver(false)}>Home</NavLink>{over && <Dropdown/>}</li>
        <li><NavLink to="Aboutus">About Us</NavLink></li>
        <li><NavLink to="Blogs">Blogs</NavLink></li>
        <li><NavLink to="Careers">Careers</NavLink></li>
        <li><NavLink to="Solutions">Solutions</NavLink></li>
        <li><NavLink to="Product">Product</NavLink></li>
        <li><NavLink to="Leadership">Leadership</NavLink></li>
        <li><NavLink to="Support">Support</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
