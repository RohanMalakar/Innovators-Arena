import React, { useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import Homelayout from "../Layouts/Homelayout.jsx";
import { Link } from 'react-router-dom';
import homepageImage from "../assets/Images/homePageMainImage.png";
import { useDispatch } from 'react-redux';
import { useEffect as useReduxEffect } from 'react';
import { GetUserProfile } from '../Redux/Slices/AuthSlices.js';
import TopEducator from "../Pages/TopEducator.jsx";
import StudentsReviews from "../Pages/StudentsReviews.jsx";
import SocialMedia from "../Pages/SocialMedia.jsx"; 
import Carousel from "../Pages/ImageSlider.jsx";
import { Typed } from 'react-typed';
import gif3 from "../assets/Images/gif3.gif"; // Adjust path as necessary
import Header from '../components/Header.jsx';

function Homepage() {
    const dispatch = useDispatch();

    // Load data using Redux action
    async function loaddata() {
        dispatch(GetUserProfile());
    }

    // Dispatch the profile loading on component mount
    useReduxEffect(() => {
        loaddata();
    }, []);

    const typedElement = useRef(null); // Reference for Typed

    useEffect(() => {
        if (typedElement.current) {
            // Initialize typing effect
            typedElement.current = new Typed(typedElement.current, {
                strings: [
                    "Mentorship by the Seniors.",
                    "Industry expert's Workshops.",
                    "New possibilities Exploration.",
                    "Hands-On Experiance",
                    "Web Development Mentorship.",
                    "IOT Based projects Mentorship."
                ],
                typeSpeed: 50,
                backSpeed: 50,
                loop: true,
                showCursor: true, // Show the cursor while typing
                cursorChar: '|',
            });
        }
    }, []);

    return (
        <Homelayout>
            <div
                className="flex pt-20 flex-col h-[100vh] sm:flex-row items-center sm:justify-center lg:pt-7  relative"
            >
                
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor:"white",
                        opacity: 1,
                        zIndex: -1,
                    }}
                ></div>

                {/* Left Section (Text Content) */}
                <div className='pl-6 w-4/5 space-y-0'>
                    <h1 className='text-8xl pb-5 pl-10   font-extrabold '>
                        Be Innovative
                    </h1>
                    <h1 className='text-8xl pb-5 pl-10  font-extrabold text-red-600'>
                        Be Creative
                    </h1>
                    
                    <div className="flex flex-col">
                        <h1 className='text-6xl pr-10 pl-10 font-extrabold sm:text-5xl mb-4'>
                            Here You Get 
                        </h1>
                        <div className="flex flex-row">
                            <h1 className="text-3xl font-semibold sm:text-5xl text-white  mb-4">⇛</h1>
                            <div
                                ref={typedElement}
                                className="text-3xl font-semibold sm:text-5xl text-red-600 mb-4"
                                >
                                {/* Typing effect will appear here */}
                            </div>
                        </div>
                    </div>

                    <div className='space-x-4 pt-10 pb-10'>
                        <Link to={"/contact"}>
                            <button className='text-white ml-10 bg-red-600  border-solid  font-bold  p-2 hover:bg-gray-400  hover:text-black rounded-md'>
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Section (Image) */}
                <div className="p-0 m-0 h-[100%] w-3/5 flex justify-center items-center">
                    <motion.img
                        src={homepageImage}
                        alt="home page image"
                        className=" rounded-xl"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </div>

            {/* Additional Sections */}
            <Header/>
            <TopEducator />
            <SocialMedia />
        </Homelayout>
    );
}

export default Homepage;
