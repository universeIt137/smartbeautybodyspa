import React from 'react';

const HoursOfOperation = () => {
    const days = [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
    ];
    const hours = "10:00AM - 10:00PM";

    return (

        <>

            <h2 className="text-4xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-center">
                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730893242/11.%20SPA-Center/HomePage/myfu0aktexslikos6poa.png" alt="" className='mx-auto' />
            </h2>
            <div className="w-3/4 mx-auto mt-10 shadow-lg rounded-lg overflow-hidden">


                {/* Header Section */}
                <div className="bg-cover bg-center text-white font-bold text-center py-4"
                    style={{
                        backgroundImage: 'url("https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730893172/11.%20SPA-Center/HomePage/qfoj89kktqvchpooecav.jpg")'
                    }}
                >
                    Dhaka Body Queen Spa
                </div>

                {/* Table Section */}
                <div className="bg-white p-4">
                    {days.map((day, index) => (
                        <div key={index} className="flex justify-center lg:gap-96 gap-4 lg:text-2xl items-center py-3 border-b">
                            <span className="font-semibold text-gray-700 text-center">{day}</span>
                            <span className="font-bold text-gray-800">{hours}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};

export default HoursOfOperation;
