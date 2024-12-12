export default function ProjectSection() {
    return (
        <div className="bg-gray-50 text-base md:text-xl py-12 px-6 md:px-12 lg:px-24" id="aboutUsSection">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Us: Mama Yoga Studio</h2>

            <div className="space-y-8 max-w-7xl mx-auto text-gray-700">
                {/* Welcome Section */}
                <p className="text-lg leading-relaxed">
                    Welcome to our Mama Yoga studio, a place where expectant and new mothers can find balance, relaxation, and strength. We are a team of certified yoga instructors with over <span className="font-semibold text-gray-900">10 years of experience</span>, specializing in <span className="text-orange-600 font-semibold">Prenatal yoga, Postnatal yoga</span> and <span className="text-green-600 font-semibold">Garbh Sanskar Yoga</span>. Our mission is to empower women through their pregnancy and postpartum journey, offering tailored programs that promote health and well-being.
                </p>

                {/* Personalized Approach Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-center text-orange-600 mb-4">Our Approach</h3>
                    <p>
                        We understand that each woman’s body is unique, which is why we take a personalized approach. By reviewing medical reports and considering individual needs, we create customized yoga programs that are safe, effective, and supportive. Whether you are preparing for childbirth or recovering from delivery, our programs are designed to nurture your physical and emotional health.
                    </p>
                </div>

                {/* Success Rate Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-center text-green-600 mb-4">Our Success</h3>
                    <p>
                        With a proven track record of over <span className="font-semibold text-gray-900">90% natural delivery</span>, we have helped more than <span className="font-semibold text-gray-900">100+ happy customers</span> achieve their goals. Join us for prenatal yoga in Dehradun and experience the transformative benefits of yoga during pregnancy. Our expert instructors are here to guide you through a journey of self-care, relaxation, and empowerment.


                    </p>
                </div>
            </div>
        </div>
    );
}