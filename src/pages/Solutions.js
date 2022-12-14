import React from 'react'
import { NavLink, Link} from 'react-router-dom'

const Solutions = () => {
    return ( 
        <div className="solutions">
            <nav className='solutions-navbar'>
            <ul className='NavigationList'>
                    <li><NavLink to="/Home">Home</NavLink></li>
                    <li><NavLink to="/Aboutus">Aboutus</NavLink></li>
                    <li><NavLink to="/Products">Products</NavLink></li>
                    <li><NavLink to="/Solutions">Solutions</NavLink></li>
                    <li><NavLink to="/Blogs"> Blogs</NavLink></li>
                    <li><NavLink to="/Support">Support</NavLink></li>
                    <li><NavLink to="/Careers">Careers</NavLink></li>
					<li><NavLink to="/Leadership">Leadership</NavLink></li>
            		<li><Link className='search' to="/Search"></Link></li>
					<li><Link className='profile' to="/Profile"></Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Solutions;