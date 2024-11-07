import React, { useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { TfiMenuAlt } from 'react-icons/tfi';
import { NavLink } from 'react-router-dom';

const MobileNavbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const toggleGalleryDropdown = () => {
        setIsGalleryOpen(!isGalleryOpen);
    };

    const routes = [
        { path: "/", name: "Home" },
        { path: "/services", name: "Services" },
        { path: "/about", name: "About" },
        { path: "/contact", name: "Contact" },
        { path: "/gallery", name: "Gallery" }
      ];

    return (
        <div className='bg-white shadow-xl py-2 lg:py-0 px-4'>
            <div className='flex lg:hidden items-center justify-between'>
                {/* Logo */}
                <div className='bg-white rounded-full p-1 shadow-2xl shadow-black'>
                    <NavLink to="/">
                        <img
                            className='w-10 rounded-full'
                            src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730869312/11.%20SPA-Center/tanxlvp3dggfnhgkftnl.png"
                            alt="Logo"
                        />
                    </NavLink>
                </div>

                <p className='text-[#DC2626] font-bold text-xl'>Dhaka Body Queen SPA</p>

                {/* Toggle Button for Mobile Devices */}
                <button onClick={toggleDrawer} className='text-black'>
                    <TfiMenuAlt size={24} className='font-bold' />
                </button>
            </div>

            {/* Drawer for Small Devices */}
            {isDrawerOpen && (
                <div className='fixed inset-0 bg-opacity-50 z-50 lg:hidden'>
                    <div className='absolute left-0 top-16 w-10/12 h-screen bg-green-400 text-white p-4'>
                        <div className="flex justify-end">
                            <button onClick={toggleDrawer} className='text-white'>
                                <IoCloseCircleOutline size={32} />
                            </button>
                        </div>
                        <ul className='mt-4 space-y-2'>
                            {routes.map((route, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={route.path}
                                        onClick={toggleDrawer}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'block px-4 py-2 bg-green-500 text-white rounded-md font-medium'
                                                : 'block px-4 py-2 text-lg text-gray-100 hover:bg-green-600 hover:text-white rounded-md font-medium'
                                        }
                                    >
                                        {route.name}
                                    </NavLink>
                                </li>
                            ))}
                            
                            {/* Additional dropdown for Gallery */}
                            <li>
                                <button onClick={toggleGalleryDropdown} className='w-full text-left text-lg font-medium text-gray-100 hover:bg-green-600 hover:text-white px-4 py-2 rounded-md'>
                                    Gallery
                                </button>
                                {isGalleryOpen && (
                                    <ul className='ml-4 mt-2 space-y-2'>
                                        <li>
                                            <NavLink
                                                to="/gallery/images"
                                                onClick={toggleDrawer}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? 'block px-4 py-2 bg-green-500 text-white rounded-md font-medium'
                                                        : 'block px-4 py-2 text-gray-100 hover:bg-green-600 hover:text-white rounded-md font-medium'
                                                }
                                            >
                                                Img Gallery
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/gallery/videos"
                                                onClick={toggleDrawer}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? 'block px-4 py-2 bg-green-500 text-white rounded-md font-medium'
                                                        : 'block px-4 py-2 text-gray-100 hover:bg-green-600 hover:text-white rounded-md font-medium'
                                                }
                                            >
                                                Video Gallery
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileNavbar;
