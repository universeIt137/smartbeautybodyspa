import React from 'react';
import { Link } from 'react-router-dom';

const PackageDetails = () => {
    window.scrollTo(0, 0);

    const pkg = {
        id: 2,
        title: "Hot Stone Massage",
        rating: 4.8,
        durations: [
            { time: "60 Minutes", price: "4500 TK" },
            { time: "90 Minutes", price: "5500 TK" },
            { time: "120 Minutes", price: "7500 TK" },
        ],
        image: "https://www.dhakabodyqueenspa.com/wp-content/uploads/2022/09/full_body.jpg" // Replace with actual image URL
    };

    const similarPackages = [
        {
            id: 1,
            title: "Dry Massage",
            rating: 5.0,
            image: "https://www.dhakabodyqueenspa.com/wp-content/uploads/2022/09/full_body.jpg", // Replace with actual image URL
        },
        {
            id: 3,
            title: "Aromatherapy Massage",
            rating: 4.9,
            image: "https://www.dhakabodyqueenspa.com/wp-content/uploads/2022/09/full_body.jpg", // Replace with actual image URL
        },
        {
            id: 4,
            title: "Foot Reflexology",
            rating: 5.0,
            image: "https://www.dhakabodyqueenspa.com/wp-content/uploads/2022/09/full_body.jpg", // Replace with actual image URL
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Package Details */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Image Section */}
                    <div className="w-full h-64 lg:h-96 overflow-hidden">
                        <img className="w-full h-full object-cover" src={pkg.image} alt={pkg.title} />
                    </div>

                    {/* Details Section */}
                    <div className="p-6 md:p-10">
                        {/* Title and Rating */}
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{pkg.title}</h2>
                        <div className="flex items-center text-yellow-500 mb-4">
                            {Array.from({ length: Math.floor(pkg.rating) }, (_, i) => (
                                <span key={i}>⭐</span>
                            ))}
                            <span className="text-gray-500 ml-2">({pkg.rating})</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 text-base md:text-lg mb-6">
                            Enjoy a relaxing {pkg.title} session tailored to your needs, designed to provide complete relaxation and rejuvenation.
                        </p>

                        {/* Duration and Pricing Options */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Choose Duration</h3>
                            <ul className="space-y-3">
                                {pkg.durations.map((duration, index) => (
                                    <li key={index} className="flex justify-between items-center text-gray-700">
                                        <span className="text-lg text-green-600">{duration.time}</span>
                                        <span className="text-lg font-bold text-red-500">{duration.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Book Now Button */}
                        <div className="mt-8">
                            <button className="bg-pink-500 text-white py-3 px-6 rounded-lg text-lg w-full md:w-auto">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Similar Packages Section */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Similar Packages</h3>
                    <div className="space-y-4">
                        {similarPackages.map((similarPkg) => (
                            <Link to={'/package-details'} key={similarPkg.id}>
                                <div  className="flex items-center space-x-4 my-2">
                                    <img className="w-16 h-16 rounded object-cover" src={similarPkg.image} alt={similarPkg.title} />
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800">{similarPkg.title}</h4>
                                        <div className="flex items-center text-yellow-500">
                                            {Array.from({ length: Math.floor(similarPkg.rating) }, (_, i) => (
                                                <span key={i}>⭐</span>
                                            ))}
                                            <span className="text-gray-500 ml-2">({similarPkg.rating})</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;
