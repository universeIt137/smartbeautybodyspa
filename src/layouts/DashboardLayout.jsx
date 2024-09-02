import React, { useState } from 'react';
import Navbar from '../components/adminSide/navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    const [openMenu, setOpenMenu] = useState(true);
    return (
        <div>
            <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu}></Navbar>
            <div className="drawer drawer-mobile">
                <input
                    id="dashboard-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    About Outlet
                    <Outlet></Outlet>
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                </div>

                {openMenu && (
                    <div
                        className="drawer-side flex flex-col h-full p-3 w-60 min-w-fit text-white"
                        style={{ backgroundColor: "#0c2556" }}
                    >
                        <label
                            htmlFor="dashboard-drawer"
                            className="drawer-overlay"
                        ></label>
                        <div className="space-y-3">
                            <div className="flex items-center p-2 mt-1 space-x-4 justify-self-end">
                                <img
                                    src="https://universesoftcare.com/media/CustomerImage/Untitled-f1.jpg"
                                    alt=""
                                    className="w-12 h-12 rounded-lg dark:bg-gray-500"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold text-black">UserName</h2>
                                    <span className="flex items-center space-x-1">
                                        <Link
                                            rel="noopener noreferrer"
                                            to=""
                                            className="text-xs hover:underline dark:text-gray-400"
                                        >
                                            View profile
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <ul className="pt-2 pb-4 space-y-1 text-sm">
                                    
                                    {/* <UserLayout></UserLayout> */}

                                    {/* <HeadLayout></HeadLayout>

                                    <AdminLayout></AdminLayout>

                                    <AccountsLayout></AccountsLayout> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardLayout;