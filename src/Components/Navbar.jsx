import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
    <NavLink to="/">Home</NavLink>
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       <FaBars/>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Job Hyper</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/register" className="btn">Register</Link>
  </div>
</div>
    );
};

export default Navbar;