import React from "react";
import { FaStar, FaPhoneAlt } from "react-icons/fa"; // Import icons from react-icons
import ButtonAnimation from "../../../components/clientSide/animation-button/ButtonAnimation";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

// const massages = [
//     {
//         title: "Dry Massage",
//         image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732953824/spa-banner-15_w1pol3.png", // Replace with actual image URL
//         rating: 5.0,
//         price: [
//             { duration: "60 Minutes", cost: "4000৳" },
//             { duration: "90 Minutes", cost: "6000৳" },
//             { duration: "120 Minutes", cost: "8000৳" },
//         ],
//     },
//     {
//         title: "Nuru Massage",
//         image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732953824/spa-banner-14_jkkkjg.png", // Replace with actual image URL
//         rating: 5.0,
//         price: [
//             { duration: "60 Minutes", cost: "8000৳" },
//             { duration: "90 Minutes", cost: "11000৳" },
//             { duration: "120 Minutes", cost: "16000৳" },
//         ],
//     },
//     {
//         title: "Back & Shoulder Massage",
//         image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730875859/11.%20SPA-Center/HomePage/mtyiv5mpjecffpe5bmpi.jpg", // Replace with actual image URL
//         rating: 5.0,
//         price: [
//             { duration: "60 Minutes", cost: "4000৳" },
//             { duration: "90 Minutes", cost: "6000৳" },
//             { duration: "120 Minutes", cost: "8000৳" },
//         ],
//     },
//     {
//         title: "Dry Massage",
//         image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732953824/spa-banner-15_w1pol3.png", // Replace with actual image URL
//         rating: 5.0,
//         price: [
//             { duration: "60 Minutes", cost: "4000৳" },
//             { duration: "90 Minutes", cost: "6000৳" },
//             { duration: "120 Minutes", cost: "8000৳" },
//         ],
//     },
//     {
//         title: "Nuru Massage",
//         image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1732953824/spa-banner-14_jkkkjg.png", // Replace with actual image URL
//         rating: 5.0,
//         price: [
//             { duration: "60 Minutes", cost: "8000৳" },
//             { duration: "90 Minutes", cost: "11000৳" },
//             { duration: "120 Minutes", cost: "16000৳" },
//         ],
//     },
//     {
//         title: "Back & Shoulder Massage",
//         image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730875859/11.%20SPA-Center/HomePage/mtyiv5mpjecffpe5bmpi.jpg", // Replace with actual image URL
//         rating: 5.0,
//         price: [
//             { duration: "60 Minutes", cost: "4000৳" },
//             { duration: "90 Minutes", cost: "6000৳" },
//             { duration: "120 Minutes", cost: "8000৳" },
//         ],
//     },
// ];

const ServicePage = () => {

    const axiosPublic = useAxiosPublic();

    // Fetch packages using React Query
    const { data: massages = [], isLoading, isError } = useQuery({
        queryKey: ["massages"],
        queryFn: async () => {
            const res = await axiosPublic.get("package");
            return res.data;
        },
    });
    
    return (
        <div className="w-11/12 mx-auto">
            {/* Header Section */}
            <div className="text-center py-5 lg:py-10 bg-white">
                <h1 className="lg:text-4xl text-[17px] font-extrabold text-pink-500">
                    Our <span className="text-blue-500">Services!</span>
                </h1>
                <h2 className="lg:mt-2 lg:text-3xl text-[16px] font-bold text-blue-800">
                    Glorious Thai Spa
                </h2>
                <h3 className="lg:mt-1 text-[14px] lg:text-2xl font-bold text-blue-800">
                    Book Any Service From Below
                </h3>
                <p className="lg:mt-5 text-lg text-gray-600 text-[9px] lg:text-[17px] max-w-4xl text-justify mx-auto">
                    Welcome to Glorious Thai Spa, your premier destination for spa
                    services in Dhaka. Our spa is dedicated to providing you with a
                    serene oasis where you can escape the stresses of daily life and find
                    true relaxation. Nestled in the heart of Gulshan, our expert
                    therapists offer a wide range of services designed to rejuvenate your
                    body and calm your mind. From luxurious massages to revitalizing
                    facials, we use only the finest products and techniques to ensure
                    your complete satisfaction.
                </p>
            </div>

            {/* Services Section */}
            <div className="flex justify-center mb-4 items-center gap-6 flex-wrap">
                {massages.map((massage, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 max-w-xs"
                    >
                        {/* Image */}
                        <img
                            src={massage.ImageUrl}
                            alt={massage.title}
                            className="w-full h-56 object-cover"
                        />

                        {/* Details */}
                        <div className="p-4 bg-[#2563EB] text-white">
                            <h3 className="text-xl font-bold text-center">{massage.title}</h3>

                            {/* Rating */}
                            <div className="flex justify-center items-center my-2">
                                <span className="text-white text-lg font-semibold">
                                    {massage.rating}
                                </span>
                                <div className="ml-2 flex items-center ">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <FaStar
                                            key={i}
                                            className="h-5 w-5 text-yellow-400"
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Price List */}
                            <ul className="text-center space-y-2 my-4">
                                {massage.durations.map((item, idx) => (
                                    <li key={idx} className="flex items-center justify-between font-bold text-lg ">
                                        <span>{item.time} Minutes </span>
                                        <span className="flex justify-between items-center gap-2 " >{item.price} <img className="w-4  " src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1733050653/taka_drhiqj.png" alt="" /> </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Call Button */}
                            <button className="w-full py-2 mt-4  text-white rounded-md transition flex items-center justify-center gap-2">
                                <FaPhoneAlt /> <ButtonAnimation></ButtonAnimation>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicePage;
