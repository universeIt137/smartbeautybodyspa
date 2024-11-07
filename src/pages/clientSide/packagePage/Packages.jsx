import React from 'react';
import { Link } from 'react-router-dom';

const packages = [
    {
        id: 1,
        title: "Dry Massage",
        rating: 5.0,
        durations: [
            { time: "60 Minutes", price: "4000 TK" },
            { time: "90 Minutes", price: "5000 TK" },
            { time: "120 Minutes", price: "7000 TK" },
        ],
        image: "https://www.dhakabodyqueenspa.com/wp-content/uploads/2022/09/foot-massage.jpg" // Replace with actual image URL
    },
    {
        id: 2,
        title: "Hot Stone Massage",
        rating: 4.8,
        durations: [
            { time: "60 Minutes", price: "4500 TK" },
            { time: "90 Minutes", price: "5500 TK" },
            { time: "120 Minutes", price: "7500 TK" },
        ],
        image: "https://www.dhakabodyqueenspa.com/wp-content/uploads/2022/09/full_body.jpg" // Replace with actual image URL
    },
    {
        id: 3,
        title: "Aromatherapy Massage",
        rating: 4.9,
        durations: [
            { time: "60 Minutes", price: "5000 TK" },
            { time: "90 Minutes", price: "6000 TK" },
            { time: "120 Minutes", price: "8000 TK" },
        ],
        image: "https://www.dhakabodyqueenspa.com/wp-content/uploads/2022/08/photo-1540555700478-4be289fbecef.jpg" // Replace with actual image URL
    },
    {
        id: 4,
        title: "Foot Reflexology",
        rating: 5.0,
        durations: [
            { time: "30 Minutes", price: "2000 TK" },
            { time: "60 Minutes", price: "3500 TK" },
        ],
        image: "https://www.dhakabodyqueenspa.com/wp-content/uploads/2022/09/nurumassage.jpg" // Replace with actual image URL
    },

    {
        id: 2,
        title: "Hot Stone Massage",
        rating: 4.8,
        durations: [
            { time: "60 Minutes", price: "4500 TK" },
            { time: "90 Minutes", price: "5500 TK" },
            { time: "120 Minutes", price: "7500 TK" },
        ],
        image: "https://www.dhakabodyqueenspa.com/wp-content/uploads/2022/09/full_body.jpg" // Replace with actual image URL
    },
    {
        id: 3,
        title: "Aromatherapy Massage",
        rating: 4.9,
        durations: [
            { time: "60 Minutes", price: "5000 TK" },
            { time: "90 Minutes", price: "6000 TK" },
            { time: "120 Minutes", price: "8000 TK" },
        ],
        image: "https://www.dhakabodyqueenspa.com/wp-content/uploads/2022/08/photo-1540555700478-4be289fbecef.jpg" // Replace with actual image URL
    },
    {
        id: 4,
        title: "Foot Reflexology",
        rating: 5.0,
        durations: [
            { time: "30 Minutes", price: "2000 TK" },
            { time: "60 Minutes", price: "3500 TK" },
        ],
        image: "https://www.dhakabodyqueenspa.com/wp-content/uploads/2022/09/nurumassage.jpg" // Replace with actual image URL
    },
    // Add more packages as needed
];

const PackageCard = ({ pkg }) => {
    return (
        <div className="max-w-sm   rounded overflow-hidden shadow-lg flex flex-col justify-between border">
            <div className="h-20 lg:h-40 w-full overflow-hidden">
                <img className="w-full h-full object-cover" src={pkg.image} alt={pkg.title} />
            </div>
            <div className="px-2 lg:px-6 py-4">
                <div className="font-bold lg:text-xl lg:mb-2">{pkg.title}</div>
                <p className="text-gray-700 text-base line-clamp-3">
                    <div className="text-yellow-500 lg:mb-2">
                        {Array.from({ length: Math.floor(pkg.rating) }, (_, i) => (
                            <span key={i}>⭐</span>
                        ))}
                        <span className="text-gray-500 ml-2">({pkg.rating})</span>
                    </div>
                </p>

                {/* Duration and Price List */}
                <ul className="my-4">
                    {pkg.durations.map((duration, index) => (
                        <li key={index} className="flex justify-between text-gray-700 mb-1">
                            <span className="text-green-600">{duration.time}</span>
                            <span className="text-red-500 font-bold">{duration.price}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="lg:px-6 px-2 space-y-2 lg:pt-4 lg:pb-10 pb-2 lg:flex gap-4">

                <button className="mt-auto bg-pink-500 text-white py-2 px-4 rounded-lg w-full">
                    <Link to={'/package-details'}>
                        See Details
                    </Link>
                </button>


                <button className="mt-auto bg-pink-500 text-white py-2 px-4 rounded-lg w-full">
                    Book Now
                </button>
            </div>
        </div>
    );
};


const Packages = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Packages</h2>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4  w-11/12 mx-auto">
                {packages.map(pkg => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))}
            </div>
        </div>
    );
};

export default Packages;
