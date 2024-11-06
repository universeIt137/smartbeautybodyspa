import React from 'react';
import ServiceContent from './ServiceContent';


const ServiceSection = () => {
    return (
        <div >
            {/* Title Section */}
            <h2 className="text-4xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-center">
                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730896027/11.%20SPA-Center/HomePage/p6qjewftqkbrnpyw4fou.png" alt="" className='mx-auto w-1/3' />
            </h2>

            <ServiceContent reverse={false}></ServiceContent>
            <ServiceContent reverse={true}></ServiceContent>

            <ServiceContent reverse={false}></ServiceContent>
            <ServiceContent reverse={true}></ServiceContent>

            <ServiceContent reverse={false}></ServiceContent>
            <ServiceContent reverse={true}></ServiceContent>

            <ServiceContent reverse={false}></ServiceContent>
            <ServiceContent reverse={true}></ServiceContent>

            <ServiceContent reverse={false}></ServiceContent>
            <ServiceContent reverse={true}></ServiceContent>

            <ServiceContent reverse={false}></ServiceContent>
            <ServiceContent reverse={true}></ServiceContent>
            
        </div>
    );
};

export default ServiceSection;
