import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const FloatingBtn = () => {
    return (
        <div>
             <div className="fixed bottom-4 left-4 flex gap-4">
                <button className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600 transition duration-300">
                    <FaPhone size={20} />
                </button>
                <button className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600 transition duration-300">
                    <FaWhatsapp size={20} />
                </button>
            </div>
        </div>
    );
};

export default FloatingBtn;