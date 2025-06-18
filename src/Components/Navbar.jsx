import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)


  const links = <>
    <NavLink to="/" className="btn btn-ghost">Home</NavLink>
    {
      user && <> <NavLink to="/myapplication" className="btn btn-ghost">My Application</NavLink>
      <NavLink to="/mypostedjobs" className="btn btn-ghost">My Posted Jobs</NavLink>
        <NavLink to="/addjobs" className="btn btn-ghost">Add Jobs</NavLink>
        
      </>
    }

  </>
  return (
    <div className="navbar container mx-auto bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars />
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
        {!user ?
          <>
            <Link to="/login" className="btn">Login</Link>
            <Link to="/register" className="btn">Register</Link>
          </> :
          <>
            <div className="dropdown dropdown-center">
              <div tabIndex={0} role="button" className='btn btn-ghost btn-circle avatar'><img className='w-10 rounded-full' src={user.photoURL} /></div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-42   shadow-sm">

                <li><Link>{user.displayName}</Link></li>

                <li><button onClick={() => logOut()}>LogOut</button></li>
              </ul>
            </div>
          </>

        }


      </div>
    </div>
  );
};

export default Navbar;