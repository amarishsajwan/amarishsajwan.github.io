import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaPhone, FaInstagram, FaSquareInstagram } from "react-icons/fa6";

import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
    const [nav, setNav] = useState(true)

    return <div className=' bg-gray-50 flex flex-col  py-8 px-8  container mx-auto'>
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

        <div className='bg-white flex shadow-md items-center justify-center rounded-md'>
            <ul className='hidden h-full w-full justify-around items-center text-3xl mt-10 font-sans px-2  font-semibold md:flex gap-8 cursor-default'>

                <li className="hover:text-orange-600 transition  duration-200 ">
                    <Link to="services" smooth={true} duration={500}>
                        Services
                    </Link></li>
                <li className="hover:text-orange-600 transition duration-200"> <Link to="aboutUs" smooth={true} duration={500}>
                    About Us
                </Link></li>
                <li className="hover:text-orange-600 transition duration-200"> <Link to="contactUs" smooth={true} duration={500}>
                    Contact Us
                </Link></li>
            </ul>
        </div>


    </div>
}