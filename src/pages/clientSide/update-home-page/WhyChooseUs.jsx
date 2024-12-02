import React, { useState } from "react";

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            text: "Best Quality Time",
            icon: "🌸",
            description: "Enjoy the best moments of relaxation and care.",
            image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730875859/11.%20SPA-Center/HomePage/mtyiv5mpjecffpe5bmpi.jpg", // Replace with your image URL
        },
        {
            id: 2,
            text: "Best Body to Body Massage",
            icon: "🧘‍♀️",
            description: "Experience the most soothing body massage techniques.",
            image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731401272/zvsmfdptyreawyxehhwr.jpg", // Replace with your image URL
        },
        {
            id: 3,
            text: "Best Comfortable Rooms",
            icon: "🚿",
            description: "Relax in our premium and cozy rooms designed for your comfort.",
            image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731401247/lj50xbncddbxz6wexx1c.jpg", // Replace with your image URL
        },
        {
            id: 4,
            text: "Best Price",
            icon: "💰",
            description: "Affordable luxury that fits your budget.",
            image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731401227/mfawgkt1ojyu8lvnfdg5.jpg", // Replace with your image URL
        },
        {
            id: 5,
            text: "Expert Therapist",
            icon: "👩‍⚕️",
            description: "Our therapists are highly skilled professionals.",
            image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731401052/hnsqtgdcwmstsllbbaa0.jpg", // Replace with your image URL
        },
    ];

    const [selectedFeature, setSelectedFeature] = useState(features[0]); // Default to the first feature

    return (
        < >
            <div className="w-11/12 mx-auto lg:my-10 " >
                <div>
                    <h2 className="lg:text-4xl text-xl text-center font-bold lg:mb-6">
                        <span className="text-pink-500">Why</span>{" "}
                        <span className="text-blue-600">Choose us?</span>
                    </h2>
                </div>
                <section className="flex flex-col lg:flex-row  lg:justify-between">
                    {/* Left Side */}
                    <div className="w-full lg:w-1/2 lg:mb-10 mb-0">
                        <ul className="lg:space-y-3 space-y-2 ">
                            {features.map((feature) => (
                                <li
                                    key={feature.id}
                                    onClick={() => setSelectedFeature(feature)} // Update selected feature on click
                                    className={`flex items-center  rounded-lg cursor-pointer transition $`}
                                >
                                    <div className={`lg:text-5xl p-4 rounded-full font-bold mr-4 ${selectedFeature.id === feature.id
                                        ? "bg-purple-500 text-white"
                                        : "bg-pink-100 hover:bg-pink-200"
                                        }`}>{feature.icon}</div>
                                    <span className="lg:text-2xl font-bold mr-4">{feature.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side */}
                    <div className="w-full lg:w-1/2 h-screen  lg:mb-10 mb-4 mt-3 lg:mt-0 ">
                        <div
                            className="rounded-lg h-screen shadow-lg  w-full p-6 bg-cover bg-center"
                            style={{
                                height: "100%",
                                backgroundImage: `url('${selectedFeature.image}')`, // Dynamically set background image
                            }}
                        >
                            <div className="bg-white bg-opacity-50 p-4 rounded-lg">
                                <h3 className="lg:text-2xl font-semibold lg:mb-4">{selectedFeature.text}</h3>
                                <p className=" text-[12px] lg:text- text-gray-700">{selectedFeature.description}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default WhyChooseUs;
