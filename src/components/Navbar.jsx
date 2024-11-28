import React, { useState, useRef, useEffect } from 'react';
import { FaPhone } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const topNavbarRef = useRef(null); // Reference for the top navbar
    const [currentOffset, setCurrentOffset] = useState(0);
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

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
        <div className='md:mx-auto md:container flex flex-row max-sm:items-center justify-between  md:flex-col'>
            {/* Logo Section */}
            <div ref={topNavbarRef} className="relative transition-none bg-gray-50 md:py-8 md:px-8 ">
                <div className="flex justify-between">
                    <div className="text-start font-sans ">
                        <h1 className='text-4xl lg:text-9xl'>
                            <span className="text-[#FF0000]  font-bold">MAMA </span>
                            <span className="text-[#FFD700]  font-bold">YOGA</span>
                        </h1>
                        <h6 className="text-[#333] font-bold md:mt-[5px]">Nurturing Pregnancy - Way to Natural Delivery</h6>
                    </div>
                    <div className=" hidden lg:show md:flex flex-col items-center font-bold">
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
                className={`hidden md:block ${isSticky ? "  fixed top-0 left-0 w-full z-50 shadow-md transition-none bg-white" : "relative bg-white shadow-md"
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

            {/* Mobile Navbar Section */}
            <div onClick={handleNav} className='block m-2 md:hidden transition hover:bg-slate-300'>
                <AiOutlineMenu size={24} />
            </div>
            <div className={!nav ? 'md:hidden fixed left-0 top-0 w-full z-[999] border-r border-r-gray-900 h-full bg-gray-300 translation ease-in-out duration-700' : 'md:hidden pt-10 z-[999]  fixed -left-full  translation  ease-in-out duration-700'} >
                <div className='transition absolute right-5 top-2 bg-slate-50 hover:bg-slate-100' onClick={handleNav}>
                    <AiOutlineClose color='black' size={21} />
                </div>
                <div className="text-start font-sans ">
                    <h1 className='text-4xl lg:text-9xl'>
                        <span className="text-[#FF0000]  font-bold">MAMA </span>
                        <span className="text-[#FFD700]  font-bold">YOGA</span>
                    </h1>
                    <h6 className="text-[#333] font-bold md:mt-[5px]">Nurturing Pregnancy - Way to Natural Delivery</h6>
                </div>
                <ul className='pt-4 uppercase flex divide-y  divide-black  flex-col items-start'>
                    <li onClick={handleNav} className="p-4 cursor-default"> <Link to="services" onClick={handleNav} className='hover:font-bold' smooth={true} duration={500}>
                        Services
                    </Link></li>

                    <li className="p-4 border-gray-300 cursor-default"><Link to="aboutUs" onClick={handleNav} smooth={true} duration={500}>
                        About Us </Link>
                    </li>

                    <li className="p-4  border-gray-300 cursor-default" ><Link to="contactUs" onClick={handleNav} smooth={true} duration={500}>
                        Contact Us
                    </Link></li>
                </ul>

            </div>
        </div>
    );
}
