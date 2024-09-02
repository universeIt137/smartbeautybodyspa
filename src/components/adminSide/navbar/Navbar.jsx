import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = ({setOpenMenu, openMenu}) => {

    
    const menuItem = (
        <>
            <>
              <li className="font-semibold">
                <Link to="/dashboard">Dashboard</Link>
              </li>
    
                <li className="font-semibold">
                  <Link to="/dashboard/today-followUps">
                    Today Follow Up
                    <p className="badge badge-secondary badge-sm">
                      
                    </p>
                  </Link>
                </li>
              
              <li className="text-white font-semibold">
                <button>
                  <MdLogout></MdLogout>
                </button>
              </li>
            </>
          
        </>
      );

    return (
        <div
            className="sticky top-0 z-50 navbar text-white shadow-lg flex justify-between"
            style={{ backgroundColor: "#0c2556" }}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={1}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItem}
                    </ul>
                </div>
                <div className="flex items-center">
                    <Link to="/" className="btn btn-ghost normal-case text-2xl">
                        USC CRM
                    </Link>
                    <p
                        onClick={() => setOpenMenu(!openMenu)}
                        className="    text-white    p-1 text-xl rounded-md "
                    >
                        <FaBars />
                    </p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{menuItem}</ul>
            </div>
            <label
                htmlFor="dashboard-drawer"
                tabIndex={2}
                className="btn btn-ghost lg:hidden"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    />
                </svg>
            </label>
        </div>
    );
};

export default Navbar;