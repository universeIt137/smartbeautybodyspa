import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn, MdAccessTime } from 'react-icons/md';
import { NavLink, useLocation } from 'react-router-dom';
// const pathname = useLocation();
// console.log(pathname);
const UpdateNavbar= () => {
    return (
        <div>
            <div className="w-full">
                {/* Top Header Section */}
                <div className='w-11/12 mx-auto ' >
                    <div className="bg-white border-b border-gray-200">
                        <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-3">
                            {/* Logo or Business Name */}
                            <h1 className="text-xl md:text-2xl font-bold text-[#2563eb] ">
                            Smart Beauty Body Spa
                            </h1>

                            {/* Contact Information */}
                            <div className=' hidden lg:block ' >
                                <div className="flex  flex-wrap justify-center md:justify-end items-center space-x-4 md:space-x-8 mt-2 md:mt-0 w-full md:w-auto">
                                    {/* Address Section */}
                                    <div className="flex items-center space-x-2">
                                        <MdLocationOn className="text-[#2563eb] w-5 h-5 md:w-6 md:h-6" />
                                        <div>
                                            <p className="text-sm md:text-base text-gray-800 font-medium">
                                                Gulshan 2 rod numbar 44
                                            </p>
                                            <p className="text-xs md:text-sm text-gray-500">
                                                Visit Us
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone Section */}
                                    <div className="flex items-center space-x-2">
                                        <FaPhoneAlt className="text-[#2563eb] w-4 h-4 md:w-5 md:h-5" />
                                        <div>
                                            <p className="text-sm md:text-base text-gray-800 font-medium">
                                                01312742062
                                            </p>
                                            <p className="text-xs md:text-sm text-gray-500">
                                                Call Us
                                            </p>
                                        </div>
                                    </div>

                                    {/* Schedule Section */}
                                    <div className="flex items-center space-x-2">
                                        <MdAccessTime className="text-[#2563eb] w-5 h-5 md:w-6 md:h-6" />
                                        <div>
                                            <p className="text-sm md:text-base text-gray-800 font-medium">
                                                Sat - Fri: 10am-10pm
                                            </p>
                                            <p className="text-xs md:text-sm text-gray-500">
                                                Open
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navbar Section */}
                <div className='bg-blue-600' >
                    <div className=" w-11/12 mx-auto  hidden lg:block ">
                        <div className="container mx-auto flex items-center justify-between px-4 py-2">
                            <div className="flex space-x-8">
                                <NavLink
                                    to="/"
                                    className="text-white font-medium hover:bg-pink-600 px-3 py-2 rounded-md transition"
                                >
                                    HOME
                                </NavLink>
                                <NavLink
                                    to="/packages"
                                    className="text-white font-medium hover:bg-pink-600 px-3 py-2 rounded-md transition"
                                >
                                    PACKAGES
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className="text-white font-medium hover:bg-pink-600 px-3 py-2 rounded-md transition"
                                >
                                    ABOUT
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className="text-white font-medium hover:bg-pink-600 px-3 py-2 rounded-md transition"
                                >
                                    CONTACT
                                </NavLink>
                                <NavLink
                                    to="/gallery"
                                    className="text-white font-medium hover:bg-pink-600 px-3 py-2 rounded-md transition"
                                >
                                    GALLERY
                                </NavLink>
                            </div>
                            {/* Social Media Icons */}
                            <div className="flex space-x-4 text-white">
                                <NavLink to={`https://www.facebook.com/profile.php?id=61551431156331`} className="hover:text-pink-600">
                                    <FaFacebookF className="w-5 h-5" />
                                </NavLink>
                                <NavLink href="#" className="hover:text-pink-600">
                                    <FaInstagram className="w-5 h-5" />
                                </NavLink>
                                <NavLink href="#" className="hover:text-pink-600">
                                    <FaTwitter className="w-5 h-5" />
                                </NavLink>
                                <NavLink href="#" className="hover:text-pink-600">
                                    <FaYoutube className="w-5 h-5" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateNavbar;
