import React, { useState, useRef, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaPhone, FaInstagram, FaSquareInstagram } from "react-icons/fa6";

import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
    const topNavbarRef = useRef(null); // Ref for top navbar
    const stickyNavbarRef = useRef(null); // Ref for sticky navbar
    const [currentOffset, setCurrentOffset] = useState(0);

    useEffect(() => {
        const topHeight = topNavbarRef.current?.offsetHeight || 0;
        const stickyHeight = stickyNavbarRef.current?.offsetHeight || 0;

        // Update offset dynamically based on scroll position
        const handleScroll = () => {
            if (window.scrollY >= 189) {
                setCurrentOffset(stickyHeight);
            } else {
                setCurrentOffset(topHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div ref={topNavbarRef} className='relative'>
            <div className={"bg-gray-50 flex flex-col py-8 px-8 mx-auto container"}>
                <div className='flex justify-between'>
                    <div className="text-start font-sans">
                        <h1>
                            <span className="text-[#FF0000] text-9xl font-bold">MAMA </span>
                            <span className="text-[#FFD700] text-9xl font-bold">YOGA</span>
                        </h1>
                        <h6 className=" text-[#333] font-bold mt-[5px]">Nurturing Pregnancy - Way to Natural Delivery</h6>


                    </div>
                    <div className='flex flex-col justify-self-center self-center items-center font-bold justify-center'>
                        <p className="text-gray-700">Book your Slot today
                        </p>
                        <div className="flex justify-center items-center">

                            <FaPhone />
                            <p className="text-gray-700 mx-2"> +91 8979421371</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <FaPhone />
                            <p className="text-gray-700 mx-2"> +91 8979444961</p>
                        </div>
                    </div>
                </div>
                <div ref={stickyNavbarRef} className={'fixed top-0 w-[1472.012px] z-50'}>
                    <div className='bg-white shadow-md w-full  rounded-md'>
                        <div className='flex items-center h-[100px] justify-center'>
                            <ul className='hidden w-full justify-around items-center text-3xl  font-sans px-2  font-semibold md:flex gap-8 cursor-default'>

                                <li className="hover:text-orange-600 transition  duration-200 ">
                                    <Link to="services" smooth={true} offset={-180} duration={500}>
                                        Services
                                    </Link></li>
                                <li className="hover:text-orange-600 transition duration-200"> <Link to="aboutUs" smooth={true} offset={-currentOffset} duration={500}>
                                    About Us
                                </Link></li>
                                <li className="hover:text-orange-600 transition duration-200"> <Link to="contactUs" smooth={true} offset={-180} duration={500}>
                                    Contact Us
                                </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
