import React from "react";

const UI = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 text-white flex items-center justify-center min-h-screen px-4 ">
      <div className="w-full max-w-[100%] h-auto md:h-[450px] bg-black bg-opacity-40 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start px-6 md:px-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-5 mt-7 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-7 md:mb-6">
            UI/UX Design
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            UI/UX services to create intuitive, engaging, and responsive designs
            that enhance user experience across all platforms
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/3641/7545/48d7f61de4ff3c2a887942ea84ca11fc?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JO8tYQRTDZYaCpl0e5jGHSfhrlzsZm3x-2Gs6bW8EYndvwSPEf00F3vXPA4hGAvbGX~RUOjha27la1t2FVoVl0EG1g0Tx0OB1ES6rw6m3VcVrcUkMCMrjphSauNP2pmvKeQLJyaQnzZ7S13pwwkPfJkMr7heAh4Nwm271qwcGI3wMgcobR79Ikabt4XAI5scpbb2wIL0kC59Pcalko5YTPeigoWnN4wTL9EmipZUqVq~EpeDKJJpuUPpt~KwO3U~7wx6Z83J9QW3wZVTzOQLtQ3iKCdaldiTodXhOLUHUeqlufeAb-NefbiXF7xmGscv7JkQXqQxvmuOGnUXsfXjbQ__"
            alt="..."
            className="rounded-lg shadow-lg object-cover w-full max-w-[100%] h-auto md:h-[450px] md:max-w-none mb-6"
          />
        </div>
      </div>
    </div>
  );
};

export default UI;
