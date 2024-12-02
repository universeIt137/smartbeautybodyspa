import React, { useState } from "react";

const ServiceThree = () => {
    const services = [
        {
            id: 1,
            title: "Sensual Massage",
            description: "Start from 7000 Taka",
            priceRange: "Range: 7000 - 14000 Taka",
            image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731309165/ts2ku7vuccyc1pfqy1vp.jpg",
        },
        {
            id: 2,
            title: "Hot Stone Massage",
            description: "Start from 8000 Taka",
            priceRange: "Range: 8000 - 15000 Taka",
            image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731307695/tytwyido3ulk4fwqxect.jpg",
        },
        {
            id: 3,
            title: "Swedish Massage",
            description: "Start from 6000 Taka",
            priceRange: "Range: 6000 - 12000 Taka",
            image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731309165/ts2ku7vuccyc1pfqy1vp.jpg",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    };

    return (
        <div className="" style={{
            backgroundSize:"cover",
            backgroundPosition : "center",
            height: "100%",
            backgroundImage: `url('https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732953822/spa-banner-16_mzxjix.png')`,
        }}  >
            <div className="my-5 w-11/12 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left Side: Text Section */}
                    <div className="lg:space-y-6 text-left">
                        <h1 className="lg:text-4xl font-bold text-yellow-400">
                            Unwind and Renew Your Body and Mind with Our Best Packages
                        </h1>
                        <p className="lg:text-lg text-[11px] text-gray-200">
                            Indulge in the ultimate relaxation and wellness experience with our
                            exceptional spa services in Dhaka. At Pure Body Spa BD, we offer a
                            comprehensive range of treatments that cater to your every need.
                            Immerse yourself in the soothing ambiance of our spa as our skilled
                            therapists transport you to a world of tranquility. Choose from an
                            array of rejuvenating massage therapies, from the stress-relieving
                            magic of Swedish massage to the deep relaxation of hot stone
                            massage. Our facial treatments are designed to leave your skin
                            radiant and refreshed, using only the finest natural ingredients.
                        </p>
                        <button className="lg:px-6 px-3 py-2 lg:text-[16px] text-[12px] lg:py-3 mt-2 lg:mt-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-bold shadow-lg transition transform hover:scale-105">
                            View all Services
                        </button>
                    </div>

                    {/* Right Side: Slider */}
                    <div className="relative w-full overflow-hidden">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="min-w-full flex flex-col items-center text-center"
                                >
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    <h3 className="text-xl text-white font-bold mt-4">{service.title}</h3>
                                    <p className="mt-2 text-white ">{service.description}</p>
                                    <p className="mt-1 text-white">{service.priceRange}</p>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute top-[130px] left-2 transform -translate-y-1/2 bg-[#1057C1] text-white text-2xl text-balance px-4 py-3 rounded-full shadow-md "
                        >
                            {"<"}
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-[130px] right-2 transform -translate-y-1/2 bg-[#1057C1] text-white text-2xl text-balance px-4 py-3 rounded-full shadow-md "
                        >
                            {">"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceThree;
