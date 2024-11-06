import React from 'react';
import { FaHeadphones, FaPhoneAlt } from 'react-icons/fa';

const SpaBanner = () => {
    return (
        <div className="w-full h-screen flex flex-col">
            {/* Background Image Section */}
            <div
                className="relative w-full h-[80vh] bg-cover bg-center text-white"
                style={{ backgroundImage: 'url("https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730881369/11.%20SPA-Center/HomePage/deo7avuqrcfygeacfayn.png")' }}
            >
                {/* Overlay for readability on mobile */}
                {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center mx-auto  md:w-11/12">
                    <h1 className="text-3xl md:text-5xl font-extrabold uppercase">
                        The Best Body Spa in Dhaka
                    </h1>
                    <p className="text-sm md:text-xl mt-2 uppercase font-semibold">
                        Body Spa Near Me in Gulshan & Banani Dhaka
                    </p>
                    <p className="mt-4 text-sm md:text-lg leading-relaxed">
                        Dhaka Body Queen Spa is the best spa in Dhaka. Are you searching for "body massage spa near me," "body to body spa Dhaka," "body massage spa in Uttara Dhaka," or "Dhaka spa massage"? Then we are here for you. We provide all kinds of spa services like Thai massage, Nuru massage, and more. Our expert massage therapists will help you relax and enjoy beautiful moments with us.
                    </p>

                    <button className="mt-6 flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-600 transition duration-300">
                        <FaHeadphones /> Call Us Now
                    </button>
                </div>
            </div>

            {/* Scrolling Text Section */}
            <div className="w-full   text-sm md:text-lg font-semibold flex items-center overflow-hidden whitespace-nowrap">
                <marquee behavior="" direction="" >
                    <p className='text-2xl flex items-center gap-2 my-4'> 
                    <span className="font-bold text-2xl text-red-500">LATEST NEWS :</span> OUR OFFICE TIME: 10:00 AM TO 10:00 PM | CALL US NOW : <FaPhoneAlt /> 01988650873
                    </p>
                </marquee>
            </div>
        </div>
    );
};

export default SpaBanner;
