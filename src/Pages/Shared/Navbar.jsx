import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../ActiveLink/ActiveLink';

const Navbar = () => {
    return (
        <nav className="navbar bg-slate-800 text-white font-serif font-bold">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case lg:text-2xl text-secondary">Users Management</a>
        </div>
        <div className="flex-none">
          <ul className="flex gap-7 px-5 lg:text-xl">
            <li><ActiveLink to='/users'>Users</ActiveLink></li>
            <li><ActiveLink to='/posts'>Posts</ActiveLink></li>          
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;