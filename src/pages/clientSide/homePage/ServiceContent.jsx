import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { FcApproval } from 'react-icons/fc';

const ServiceContent = ({reverse}) => {
    return (
        <div>
            {/* Service Content Section */}
            <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}  items-center justify-center mt-8 w-10/12  mx-auto `}>
                {/* Image Section */}
                <div className="w-full  flex justify-center md:justify-end mb-6 md:mb-0">
                    <div className="relative  w-72 h-72 lg:w-[600px] lg:h-96 rounded-full overflow-hidden border-4 border-red-500">
                        <img
                            src="https://www.dhakabodyqueenspa.com/wp-content/uploads/2022/09/foot-massage.jpg"  // Replace with actual image URL
                            alt="Massage Service"
                            className="w-full h-full  object-cover"
                        />
                    </div>
                </div>

                {/* Details Section */}
                <div className="w-full  flex flex-col items-center md:items-start px-4 text-center md:text-left">
                    <div className="mx-auto">
                        <h3 className="text-3xl font-bold">Dry Massage</h3>
                        <div className="flex items-center mt-2 gap-2">
                            <span className="text-xl font-bold">5.0</span>
                            <span className="text-yellow-500 text-lg flex">
                                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                            </span>
                        </div>
                    </div>

                    {/* Package Options */}
                    <div className="mt-4 w-full bg-white shadow-md rounded-lg text-lg md:text-xl">
                        <div className="flex justify-between p-3 border-b">
                            <span className="flex items-center text-green-600 font-semibold gap-2">
                                <FcApproval /> 60 Minutes
                            </span>
                            <span className="text-red-600 font-bold">4000 TK</span>
                        </div>
                        <div className="flex justify-between p-3 border-b">
                            <span className="flex items-center text-green-600 font-semibold gap-2">
                                <FcApproval /> 90 Minutes
                            </span>
                            <span className="text-red-600 font-bold">5000 TK</span>
                        </div>
                        <div className="flex justify-between p-3">
                            <span className="flex items-center text-green-600 font-semibold gap-2">
                                <FcApproval /> 120 Minutes
                            </span>
                            <span className="text-red-600 font-bold">7000 TK</span>
                        </div>
                    </div>

                    {/* Book Now Button */}
                    <div className="mx-auto">
                        <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-pink-500 text-white font-bold rounded-xl shadow-md hover:bg-pink-600 transition duration-300">
                            <MdOutlinePhoneInTalk /> Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceContent;