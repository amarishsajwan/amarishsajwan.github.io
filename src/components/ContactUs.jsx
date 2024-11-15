import React from "react";
import { FaPhone, FaInstagram, FaSquareInstagram } from "react-icons/fa6";
const ContactUsSection = () => {
    return (
        <section className="bg-gray-800 py-12">
            <div className="bg-gray-100 p-8 rounded-lg max-w-md mx-auto text-center shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>

                <div className="space-y-6">
                    {/* Address Section */}
                    <div>
                        <h3 className="text-xl font-semibold text-orange-600 mb-2">Address</h3>
                        <p className="text-gray-700">phase 2, siddhi vihar, Lane 4, Bangakhala,
                        </p>
                        <p className="text-gray-700">Nehrugram, Dehradun,</p>
                        <p className="text-gray-700">Uttarakhand 248001</p>
                    </div>

                    {/* Contact Numbers Section */}
                    <div>
                        <h3 className="text-xl flex items-center justify-center font-semibold text-orange-600 mb-2">Contact Numbers</h3>
                        <div className="flex justify-center items-center">
                            <FaPhone />
                            <p className="text-gray-700 mx-2"> +91 8979421371</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <FaPhone />
                            <p className="text-gray-700 mx-2"> +91 8979444961</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <FaSquareInstagram className="justify-self-start" />
                            <p className="text-gray-700 mx-4">mamayoga.in</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;
