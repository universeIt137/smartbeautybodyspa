import React, { useRef, useEffect } from 'react';

const testimonials = [
    {
        id: 1,
        name: "Jibon Chowdhuri",
        role: "Customer",
        rating: 5.0,
        image: "https://via.placeholder.com/50", // Replace with actual image URL
        text: "Me and my classmates definitely enjoyed their time/massage here. The therapists are very professional, friendly staff."
    },
    {
        id: 2,
        name: "Kelly Kimed",
        role: "Customer",
        rating: 5.0,
        image: "https://via.placeholder.com/50", // Replace with actual image URL
        text: "I've been here a couple of times mainly for deep tissue massage. I've had it with different people and they were all great. I've always felt really relaxed after that."
    },
    {
        id: 3,
        name: "Khaliur Rahman",
        role: "Customer",
        rating: 5.0,
        image: "https://via.placeholder.com/50", // Replace with actual image URL
        text: "I personally love the receptionist. She is kind and taught my friends some easy massages to do at home. Excellent hospitality. The place is clean and cozy. Highly recommended. We will come back again for sure."
    },
    {
        id: 2,
        name: "Kelly Kimed",
        role: "Customer",
        rating: 5.0,
        image: "https://via.placeholder.com/50", // Replace with actual image URL
        text: "I've been here a couple of times mainly for deep tissue massage. I've had it with different people and they were all great. I've always felt really relaxed after that."
    },
    {
        id: 3,
        name: "Khaliur Rahman",
        role: "Customer",
        rating: 5.0,
        image: "https://via.placeholder.com/50", // Replace with actual image URL
        text: "I personally love the receptionist. She is kind and taught my friends some easy massages to do at home. Excellent hospitality. The place is clean and cozy. Highly recommended. We will come back again for sure."
    },
    {
        id: 2,
        name: "Kelly Kimed",
        role: "Customer",
        rating: 5.0,
        image: "https://via.placeholder.com/50", // Replace with actual image URL
        text: "I've been here a couple of times mainly for deep tissue massage. I've had it with different people and they were all great. I've always felt really relaxed after that."
    },
    {
        id: 3,
        name: "Khaliur Rahman",
        role: "Customer",
        rating: 5.0,
        image: "https://via.placeholder.com/50", // Replace with actual image URL
        text: "I personally love the receptionist. She is kind and taught my friends some easy massages to do at home. Excellent hospitality. The place is clean and cozy. Highly recommended. We will come back again for sure."
    },
    {
        id: 2,
        name: "Kelly Kimed",
        role: "Customer",
        rating: 5.0,
        image: "https://via.placeholder.com/50", // Replace with actual image URL
        text: "I've been here a couple of times mainly for deep tissue massage. I've had it with different people and they were all great. I've always felt really relaxed after that."
    },
    {
        id: 3,
        name: "Khaliur Rahman",
        role: "Customer",
        rating: 5.0,
        image: "https://via.placeholder.com/50", // Replace with actual image URL
        text: "I personally love the receptionist. She is kind and taught my friends some easy massages to do at home. Excellent hospitality. The place is clean and cozy. Highly recommended. We will come back again for sure."
    },
];

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 min-w-[300px] mx-2">
            <p className="text-gray-700 mb-4">{testimonial.text}</p>
            <div className="flex items-center">
                <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={testimonial.image}
                    alt={`${testimonial.name}`}
                />
                <div>
                    <p className="text-gray-900 font-bold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    <div className="flex items-center text-yellow-500 mt-1">
                        {Array.from({ length: Math.floor(testimonial.rating) }, (_, i) => (
                            <span key={i}>⭐</span>
                        ))}
                        <span className="ml-2 text-gray-500">({testimonial.rating})</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const scrollRef = useRef(null);
    let isDragging = false;
    let startX;
    let scrollLeft;
    let autoScrollInterval;

    const handleMouseDown = (e) => {
        isDragging = true;
        startX = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft = scrollRef.current.scrollLeft;
        clearInterval(autoScrollInterval); // Pause auto-scroll while dragging
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed here
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        isDragging = false;
        startAutoScroll(); // Resume auto-scroll after dragging ends
    };

    const startAutoScroll = () => {
        autoScrollInterval = setInterval(() => {
            if (scrollRef.current) {
                // Scroll to the right by a fixed amount
                scrollRef.current.scrollLeft += 1;

                // If we've scrolled to the end, reset to the start
                if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
                    scrollRef.current.scrollLeft = 0;
                }
            }
        }, 40); // Adjust the interval for scroll speed
    };

    useEffect(() => {
        startAutoScroll();

        return () => clearInterval(autoScrollInterval); // Clean up interval on unmount
    }, []);

    return (
        <>
        <h2 className="text-4xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-center">
                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730894381/11.%20SPA-Center/HomePage/a1pubuieou7mmkdmbro6.png" alt="" className='mx-auto' />
            </h2>

            <div
            className="overflow-x-auto w-10/12 mx-auto p-6 cursor-grab"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            style={{ scrollbarWidth: 'none' }}
        >

            
            <div className="flex flex-nowrap items-center" style={{ gap: '16px' }}>
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </div>
        </div>
        </>
        
    );
};

export default Testimonials;
