import { useCallback, useEffect, useState } from "react";
import Carsoulcard from "./Carsoulcard";


export const Features = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    'https://source.unsplash.com/1200x540/?nature',
    'https://source.unsplash.com/1200x540/?hill',
    'https://source.unsplash.com/1200x540/?hill',
    
  ];
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
    );
  const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => (currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1)), [carouselImages.length]);

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 100000000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="w-full md:h-[470px] h-[400px] lg:h-[380px] relative overflow-hidden">
      {/* arrow left */}
      <button
        onClick={prevSlider}
        className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
      >
        <svg
          className="w-4 h-4 md:w-6 md:h-6 icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#0095FF"
              d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
            ></path>
          </g>
        </svg>
      </button>
      {/* arrow right */}
      <button
        onClick={nextSlider}
        className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
      >
        <svg
          className="w-4 h-4 md:w-6 md:h-6 icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          transform="rotate(180)"
        >
          <g strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#0095FF"
              d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
            ></path>
          </g>
        </svg>
      </button>
      {/* dots */}
      <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
        {carouselImages.map((_, inx) => (
          <button
            key={_}
            onClick={() => setCurrentSlider(inx)}
            className={`rounded-full duration-500 bg-white ${
              currentSlider === inx ? "w-8" : "w-2"
            } h-2`}
          ></button>
        ))}
      </div>
      {/* Carousel container */}
   <div className="">
   <div className="ease-linear   duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
        {/* sliders */}
        {carouselImages.map((slide, inx) => (
          <div key={slide} className="flex justify-center items-center">
            <Carsoulcard></Carsoulcard>
            <Carsoulcard></Carsoulcard>
          </div>
        ))}
      </div>
   </div>
    </div>
  );
};
