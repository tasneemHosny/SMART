import React from "react";
import ScreenImage from "./../../assets/images/screen-image.png";

const AboutSection = () => {
  return (
    <div className="relative flex bg-[#208AB2] min-h-screen">
      {/* Image with responsive diagonal width */}
      <img
        src={ScreenImage}
        alt="A background showcasing Smart Technology"
        className="absolute right-0 top-0 h-full object-cover z-10"
      />

      {/* Overlay for smaller screens */}
      <div className="absolute inset-0 bg-black bg-opacity-70 sm:block md:hidden lg:hidden z-10"></div>

      {/* Content Section */}
      <div className="relative z-20 text-left lg:px-20 md:px-12 sm:px-8 px-6 py-8 mt-3 text-center md:text-left xl:text-left">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-4xl font-bold text-white mb-6 uppercase font-montserrat">
          About Smart Technology Company
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-xl text-[#EFEFEF] font-semibold leading-relaxed mb-6">
          Our mission is turning great ideas into reality.
        </p>
        <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl text-[#EFEFEF] font-bold leading-relaxed mb-4 max-w-[600px] font-nunito">
          At <span className="font-black text-white">Smart Technology Company</span>, we ensure a
          360° approach, integrating social media, SEO, and digital marketing to build a
          unified and effective presence. We cover all aspects to make your brand shine.
        </p>

        <div className="font-nunito">
          {[ 
            {
              title: "Research and Development",
              content:
                "We're always looking for new ways to help your business grow. Our research and development team works hard to find the latest tools and techniques to improve your marketing.",
              maxWidth: "max-w-[650px]",
            },
            {
              title: "Enhance Our Community Awareness",
              content:
                "We're always looking for new ways to help your business grow. Our research and development team works hard to find the latest and greatest tools and techniques to improve your marketing.",
              maxWidth: "max-w-[550px]",
            },
            {
              title: "Your Satisfaction Is Our Priority",
              content:
                "We're always looking for new ways to help your business grow. Our research and development team works hard to find the latest and greatest tools and techniques to improve your marketing.",
              maxWidth: "max-w-[475px]",
            },
          ].map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className={`${item.maxWidth} text-xs sm:text-sm md:text-base lg:text-lg text-[#EFEFEF]`}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
