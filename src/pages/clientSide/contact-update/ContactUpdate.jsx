import React from "react";

const ContactUpdate = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-white my-4">
                <h1 className="lg:text-4xl font-bold text-pink-500">
                    Contact <span className="text-blue-500">us!</span>
                </h1>
                <p className="lg:mt-4 text-[10px] lg:text-[16px] text-gray-600 text-justify max-w-2xl">
                    At Pure Body Spa BD, we’re dedicated to providing you with the ultimate relaxation
                    experience. If you have any questions, concerns, or if you’d like to schedule an
                    appointment to unwind and rejuvenate, please don’t hesitate to get in touch with us.
                    Our knowledgeable and friendly team is here to assist you.
                </p>
            </div>
            <div className="bg-blue-600 py-12">
                <div className="w-11/12 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        {/* Left Content */}
                        <div>
                            <img
                                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1733040451/contact-page_p7iua3.jpg"
                                alt="Contact Page"
                                className="w-full lg:w-auto rounded-lg"
                            />
                            <h1 className="lg:text-4xl font-bold text-white mt-6">
                                Feel free to drop us a line
                            </h1>
                            <p className="text-white max-w-xl py-6 text-lg text-justify">
                                Feel free to reach out to us via phone or email, or simply use the convenient
                                contact form below. We appreciate your interest in our services and look forward
                                to helping you achieve tranquility and balance through our luxurious spa treatments.
                            </p>
                            <div>
                                <p className="text-white max-w-xl py-6 text-lg text-justify">
                                    Feel free to reach out to us via phone or email, or simply use the convenient
                                    contact form below. We appreciate your interest in our services and look forward
                                    to helping you achieve tranquility and balance through our luxurious spa treatments.
                                </p>
                            </div>
                        </div>
                        {/* Right Content */}
                        <div className="w-1/2" >
                            <form className="rounded-lg">
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        aria-label="Name"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        aria-label="Email"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        aria-label="Subject"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-6">
                                    <textarea
                                        placeholder="Message"
                                        aria-label="Message"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUpdate;
