import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import images from "../custom/images";
// const images = [
//   {
//     url: images.img1,
//   },
//   {
//     url: images.img5,
//   },
//   {
//     url: images.img6,
//   },
// ];
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    // Auto-change slide every 3 seconds
    const interval = setInterval(nextSlide, 5000);

    // Clear interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="md:block h-[410px] mx-0 relative group">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="flex h-full w-full bg-center bg-[length:1600px_600px] bg-no-repeat  duration-500"
      >
        <div className="bg-black w-full h-full bg-opacity-50 ">
        </div>
      </div>
      <div
        className="hidden group-hover:block absolute top-1/2 -translate-x-0 translate-y-1/2 left-5 rounded-full bg-black/20 text-white cursor-pointer"
        onClick={prevSlide}
      >
        {/* left arrow */}
        <ChevronLeftIcon className="h-5 w-5" />
      </div>
      <div
        className=" hidden group-hover:block absolute top-1/2 -translate-x-0 translate-y-1/2 right-5 rounded-full bg-black/20 text-white  cursor-pointer"
        onClick={nextSlide}
      >
        {/* Right arrow */}
        <ChevronRightIcon className="h-5 w-5" />
      </div>
    </div>

  );
}
