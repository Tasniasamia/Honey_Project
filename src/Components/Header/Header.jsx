import React from 'react';
import logo from '../../assets/honey_logo.png'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
  const navitem = (<>
    <li><NavLink to={`/`} className={({ isActive }) =>isActive? "isactive": ""}>Home</NavLink></li>
    <li><NavLink to={`/blog`} className={({ isActive }) =>isActive? "isactive": ""}>Blog</NavLink></li>
     </>
  );
  
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="px-6 py-2 my-4 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[100px]">
              {navitem}
            </ul>
          </div>
          <a href=""className='md:block lg:block hidden'><img src={logo} alt="Honey"style={{height:"90px",width:"120px"}}/></a>
        
        </div>
        <div className='navbar-center md:hidden lg:hidden flex'>
        <a href=""className='md:hidden lg:hidden block'><img src={logo} alt="Honey"style={{height:"90px",width:"120px"}}/></a>

        </div>
        <div className="navbar-center hidden lg:flex">
      
          <ul className="flex gap-5 px-1">
          {navitem}

          </ul>
        </div>
        <div className="navbar-end">
      
        <NavLink to={`/login`} className={({ isActive }) =>isActive? "isactive": ""}>Login</NavLink>
        </div>
      </div>
    );
};

export default Header;