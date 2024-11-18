

import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-scroll";
import { FaPhone } from "react-icons/fa6";

export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const topNavbarRef = useRef(null); // Reference for the top navbar
    const [currentOffset, setCurrentOffset] = useState(0);


    // Handle scroll and determine if navbar should be sticky
    useEffect(() => {
        const handleScroll = () => {
            const topNavbarHeight = topNavbarRef.current?.offsetHeight || 0;

            if (window.scrollY >= topNavbarHeight - 10) {
                console.log('inside handle scroll scrollY', window.scrollY)
                console.log('inside handle scroll navbar height', topNavbarHeight)
                setIsSticky(true); // Set navbar as sticky
                setCurrentOffset(100); // Adjust offset for sticky navbar height
            } else {
                setIsSticky(false); // Reset navbar to default position
                setCurrentOffset(topNavbarHeight - 21); // Adjust offset for top navbar height
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    window.addEventListener('scroll', () => {
        console.log(window.scrollY);
    });
    return (
        <div>
            {/* Logo Section */}
            <div ref={topNavbarRef} className="relative transition-none bg-gray-50 py-8 px-8 mx-auto container">
                <div className="flex justify-between">
                    <div className="text-start font-sans">
                        <h1>
                            <span className="text-[#FF0000] text-9xl font-bold">MAMA </span>
                            <span className="text-[#FFD700] text-9xl font-bold">YOGA</span>
                        </h1>
                        <h6 className="text-[#333] font-bold mt-[5px]">Nurturing Pregnancy - Way to Natural Delivery</h6>
                    </div>
                    <div className="flex flex-col items-center font-bold">
                        <p className="text-gray-700">Book your Slot today</p>
                        <div className="flex items-center">
                            <FaPhone />
                            <p className="text-gray-700 mx-2">+91 8979421371</p>
                        </div>
                        <div className="flex items-center">
                            <FaPhone />
                            <p className="text-gray-700 mx-2">+91 8979444961</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar Section */}
            <div
                className={`${isSticky ? "fixed top-0 left-0 w-full z-50 shadow-md transition-none bg-white" : "relative bg-white shadow-md"
                    }`}
            >
                <div className="flex items-center h-[100px] justify-center">
                    <ul className="flex w-full justify-around items-center text-3xl font-sans px-2 font-semibold gap-8 cursor-pointer">
                        <li className="hover:text-orange-600 transition duration-200">
                            <Link to="services" smooth={true} offset={-currentOffset} duration={500}>
                                Services
                            </Link>
                        </li>
                        <li className="hover:text-orange-600 transition duration-200">
                            <Link to="aboutUs" smooth={true} offset={-currentOffset} duration={500}>
                                About Us
                            </Link>
                        </li>
                        <li className="hover:text-orange-600 transition duration-200">
                            <Link to="contactUs" smooth={true} offset={-currentOffset} duration={500}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
