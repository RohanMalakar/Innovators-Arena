
import React from 'react';
import Homelayout from "../Layouts/Homelayout.jsx";
import bhoomi from "../assets/Images/bhoomi.jpg";
import siddhu from "../assets/Images/siddhu.jpg";
import sidharth from "../assets/Images/sidharth.jpg";
import raunak from "../assets/Images/raunak.jpg";
import santosh from "../assets/Images/santosh.jpg";
import ankit from "../assets/Images/ankit.jpg";
import pradumn from "../assets/Images/pradumn.jpg";
import naina from "../assets/Images/naina.jpg";




    const testimonials = [
    {
        name: 'Smart Parking System',
        title: '"Software + IOT"',
        feedback: 'Real-time parking space availability displayed through IoT sensors for efficient parking management and convenience.',
        imageUrl: bhoomi
    },
    {
        name: 'Auto Garbage Collector',
        title: '"Software + IOT"',
        feedback: 'IoT sensors detect full bins and send automatic alerts for timely waste collection and management.',
        imageUrl: ankit
    },
    {
        name: 'Smart Home Automation',
        title: '"Software + IOT"',
        feedback: 'IoT-powered system to control home devices remotely, optimizing energy use and enhancing convenience and security.',
        imageUrl: raunak
    },
    {
        name: 'Food Wastage Detector',
        title: '"Machine Learning"',
        feedback: 'IoT-enabled system to track and alert users about food spoilage, reducing waste and promoting sustainability.',
        imageUrl: santosh
    },
    {
        name: 'Blind Person Stick',
        title: '"Software + IOT"',
        feedback: 'IoT-based smart stick with sensors that detect obstacles and provide real-time alerts for blind individuals.',
        imageUrl: sidharth
    },
    {
        name: 'RAKSHAK- Smart Helmet',
        title: '"IOT Based with GPS"',
        feedback: 'IoT-integrated helmet with crash detection and emergency alerts, ensuring motorcyclists’ safety on the road.',
        imageUrl: naina
    },
    {
        name: 'Sensor Based Controller',
        title: '"IOT Based Project"',
        feedback: 'Gesture-controlled laptop operation using ultrasonic sensors, enabling hands-free interaction and enhanced user experience.',
        imageUrl: pradumn
    },
    {
        name: 'Smart Farming Robot',
        title: '"Software + IOT"',
        feedback: 'Autonomous IoT robot that performs farming tasks like planting, irrigation, and monitoring for precision agriculture.',
        imageUrl: siddhu
    }
    ];

    export default function StudentsReviews() {
    // Handle mouse movement for 3D effect
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const { clientX, clientY } = e;

        // Get card position and dimensions
        const { left, top, width, height } = card.getBoundingClientRect();
        
        // Calculate offsets relative to the card
        const offsetX = clientX - left;
        const offsetY = clientY - top;

        // Normalize to [-0.5, 0.5] range (centered position)
        const distanceX = (offsetX / width) - 0.5; // Horizontal distance normalized
        const distanceY = (offsetY / height) - 0.5; // Vertical distance normalized

        // Increase the multiplier for stronger effect and apply more 3D transformation
        const rotateX = distanceY * -50; // X-axis tilt (top-bottom)
        const rotateY = distanceX * 50;  // Y-axis tilt (left-right)

        // Apply the transformation with smooth transition
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    // Reset transformation when mouse leaves
    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.transition = "transform 0.4s ease-out"; // Smooth transition for reset
        card.style.transform = "rotateX(0) rotateY(0)"; // Reset transform on leave
    };

    return (

        
        <Homelayout>
            <div className='py-10 bg-white'>
            <h2 className='text-center text-4xl mt-10 font-bold text-red-400 {/*shadow-lg shadow-black*/} mb-10'>What Projects Have We Build So Far ❓</h2>
            <div className='max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {testimonials.map((testimonial, index) => (
                <div 
                    key={index} 
                    className='bg-red-400 rounded-lg p-6 flex flex-col text-gray-600 items-center shadow-lg shadow-white hover:scale-110 hover:bg-gray-700 hover:text-white hover:shadow-red-500 transition-all duration-500 ease-in-out'
                    style={{
                    perspective: '1000px',  // Add perspective to create depth
                    transformStyle: 'preserve-3d'  // Ensure that 3D transforms are applied to children
                    }}
                    onMouseMove={handleMouseMove} // Mouse move triggers the 3D effect
                    onMouseLeave={handleMouseLeave} // Mouse leave resets the transform
                >
                    <img 
                    src={testimonial.imageUrl} 
                    alt={`${testimonial.name} profile picture`} 
                    className='w-20 h-20 rounded-full mb-4 transition-transform duration-500 ease-in-out transform hover:scale-150' 
                    />
                    <p className='text-xl font-semibold text-white'>{testimonial.name}</p>
                    <p className='text-sm italic mt-2 text-white'>{testimonial.title}</p>
                    <p className='text-md mt-3 text-center'>{testimonial.feedback}</p>
                </div>
                ))}
            </div>
            </div>
        </Homelayout>

    );
    }