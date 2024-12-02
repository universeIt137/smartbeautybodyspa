import { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const carouselItems = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732953824/spa-banner-14_jkkkjg.png",
        heading: "adb",
        title: "afdiffsfsfff"
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732953824/spa-banner-15_w1pol3.png",
        heading: "adb",
        title: "afdiffsfsfff"
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732953824/spa-banner-11_jy7ic7.png",
        heading: "adb"
    },
];

const BannerTow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
        );
    };

    // Automatically change slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative w-full text-white lg:h-screen">
            {carouselItems.length > 0 && (
                <div
                    className="relative py-8 lg:py-0 w-full h-[100vh] flex items-center justify-center bg-cover bg-center transition-all duration-500"
                    style={{ backgroundImage: `url(${carouselItems[currentIndex]?.image})` }}
                >
                    {/* Overlay */}
                    {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

                    {/* Content */}
                    <div className="relative   z-10 w-11/12 max-w-7xl mx-auto  text-center lg:text-left flex flex-col lg:flex-row items-center gap-x-16 lg:-mt-20 ">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2  ">
                            <h2 className="text-sm uppercase tracking-wide mb-2">Welcome to</h2>
                            <h1 className="lg:text-5xl  font-bold lg:mb-4 leading-snug">
                                Best Spa in Dhaka Gulshan  Banani
                            </h1>
                            <p className="text-base lg:text-lg text-justify leading-relaxed mb-6">
                                Before we talk about Spa in Gulshan, welcome to Pure Body Spa BD,
                                your haven of tranquility and rejuvenation. Indulge in a world of
                                ultimate relaxation as our skilled therapists guide you on a journey
                                to restore your body and mind. Stress-relief spa therapies. Here you
                                can get top body spa services in Gulshan.
                            </p>
                            <div className="relative inline-flex group">
                                {/* Gradient Background */}
                                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                                {/* Button */}
                                <a
                                    href="#"
                                    title="Get quote now"
                                    className="relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    role="button"
                                >
                                    Know More
                                </a>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <div className="  overflow-hidden ">
                                <img
                                    src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732601830/spa-6-removebg-preview_eoxwit.png"
                                    alt="Spa treatment"
                                    className=" object-cover w-[75%] hidden lg:block "
                                />
                            </div>
                        </div>
                    </div>

                    
                </div>
            )}
        </div>
    );
};

export default BannerTow;
