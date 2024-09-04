import React, { useState } from 'react';
import { BsMenuButtonWideFill } from 'react-icons/bs';
import { GrMoney } from 'react-icons/gr';
import { IoMdCard } from 'react-icons/io';
import { IoCartOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { MdMenuOpen, MdOutlineCategory, MdOutlineDiscount, MdOutlineLockPerson } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <aside
                className={`bg-gradient-to-b from-indigo-600 to-indigo-800 text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-14'
                    }`}
            >
                <div className="flex justify-between items-center p-4 gap-8">
                    <div className={`text-2xl font-bold ${!isSidebarOpen && 'hidden'}`}>
                        Universe SoftTech
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="text-white focus:outline-none"
                    >
                        {isSidebarOpen ? <IoCloseCircleOutline className='text-4xl' /> : <MdMenuOpen className='text-3xl' />}
                    </button>
                </div>
                <nav className="mt-10 space-y-4">
                    <ul>
                        <li>
                            <NavLink
                                exact
                                to="/dashboard"
                                className="flex items-center space-x-3 p-3 rounded-lg transition duration-200 hover:bg-indigo-700 hover:shadow-md"
                                activeClassName="bg-indigo-900 shadow-lg"
                            >
                                <RxDashboard className='text-3xl' />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    <p className='font-bold text-2xl'>Dashboard</p>
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/order-management"
                                className="flex items-center space-x-3 p-3 rounded-lg transition duration-200 hover:bg-indigo-700 hover:shadow-md"
                                activeClassName="bg-indigo-900 shadow-lg"
                            >
                                <IoCartOutline className='text-4xl' />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    <p className='text-xl font-bold'>Order Management</p>
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/coupon-code"
                                className="flex items-center space-x-3 p-3 rounded-lg transition duration-200 hover:bg-indigo-700 hover:shadow-md"
                                activeClassName="bg-indigo-900 shadow-lg"
                            >
                                <MdOutlineDiscount className='text-3xl' />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    <p className='text-xl font-bold'>Coupon Code</p>
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/categories"
                                className="flex items-center space-x-3 p-3 rounded-lg transition duration-200 hover:bg-indigo-700 hover:shadow-md"
                                activeClassName="bg-indigo-900 shadow-lg"
                            >
                                <MdOutlineCategory className='text-4xl' />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    <p className='text-xl font-bold'>Categories</p>
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/transaction"
                                className="flex items-center space-x-3 p-3 rounded-lg transition duration-200 hover:bg-indigo-700 hover:shadow-md"
                                activeClassName="bg-indigo-900 shadow-lg"
                            >
                                <IoMdCard className='text-3xl' />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    <p className='text-xl font-bold'>Transaction</p>
                                </span>
                            </NavLink>
                        </li>
                        <li className="mt-10">
                            <NavLink
                                to="/manage-admins"
                                className="flex items-center space-x-3 p-3 rounded-lg transition duration-200 hover:bg-indigo-700 hover:shadow-md"
                                activeClassName="bg-indigo-900 shadow-lg"
                            >
                                <RiAdminLine className='text-3xl' />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    <p className="text-xl font-bold">Manage Admins</p>
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/admin-roles"
                                className="flex items-center space-x-3 p-3 rounded-lg transition duration-200 hover:bg-indigo-700 hover:shadow-md"
                                activeClassName="bg-indigo-900 shadow-lg"
                            >
                                <MdOutlineLockPerson className='text-3xl' />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    <p className="text-xl font-bold">Admin Roles</p>
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside></>
    );
};

export default Sidebar;