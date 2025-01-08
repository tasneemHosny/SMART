import React from "react";
import ScreenImage from "./../../assets/images/screen-image.png";

const AboutSection = () => {
  return (
    <div className="relative">
      {/* Normal Design for Larger Screens */}
      <div className="relative flex bg-[#208AB2] min-h-screen hidden sm:flex">
        {/* Image with responsive diagonal width */}
        <img
          src={ScreenImage}
          alt="A background showcasing Smart Technology"
          className="absolute right-0 top-0 h-full md:w-1/2 object-fit z-10"
        />

        {/* Content Section */}
        <div className="relative z-20 text-left lg:px-20 md:px-12 sm:px-8 px-6 py-8 mt-3 md:text-left xl:text-left w-full sm:w-[80%] md:w-[70%] lg:w-[70%]">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-4xl font-bold text-white mb-6 uppercase font-montserrat">
            About Smart Technology Company
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-xl text-[#EFEFEF] font-semibold leading-relaxed mb-6">
            Our mission is turning great ideas into reality.
          </p>
          <p className="text-xs sm:text-sm md:text-base w-[90%] lg:text-xl xl:text-2xl text-[#EFEFEF] font-bold leading-relaxed mb-4 font-nunito">
            At{" "}
            <span className="font-extrabold text-white">
              Smart Technology Company
            </span>, we ensure a 360° approach, integrating social media, SEO, and digital marketing to build a unified and effective presence. We cover all aspects to make your brand shine.
          </p>

          <div className="font-nunito">
            {[
              {
                title: "Research and Development",
                content:
                  "We're always looking for new ways to help your business grow. Our research and development team works hard to find the latest tools and techniques to improve your marketing.",
                maxWidth: "max-w-[650px] sm:w-[95%]",
              },
              {
                title: "Enhance Our Community Awareness",
                content:
                  "We're always looking for new ways to help your business grow. Our research and development team works hard to find the latest and greatest tools and techniques to improve your marketing.",
                maxWidth: "max-w-[550px] sm:w-[88%]",
              },
              {
                title: "Your Satisfaction Is Our Priority",
                content:
                  "We're always looking for new ways to help your business grow. Our research and development team works hard to find the latest and greatest tools and techniques to improve your marketing.",
                maxWidth: "max-w-[475px] sm:w-[71%]",
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

      {/* Small Screen Design */}
      <div className="relative bg-gradient-to-b from-[#208AB2] to-[#1A6E90] text-white min-h-screen flex flex-col sm:hidden items-center justify-center px-6 lg:px-12 py-12">
        {/* Text Section */}
        <div className="w-full text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold uppercase">
            About{" "}
            <span className="font-extrabold text-gray-800">
              Smart Technology
            </span>
          </h2>
          <p className="text-lg sm:text-xl font-medium leading-relaxed">
            Our mission is turning great ideas into reality. At{" "}
            <span className="font-extrabold text-gray-800">
              Smart Technology Company
            </span>, we ensure a 360° approach, integrating social media, SEO, and digital marketing to build a unified and effective presence.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            We cover all aspects to make your brand shine.
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 gap-6 mt-8">
            {[
              {
                title: "Research and Development",
                content:
                  "We're always looking for new ways to help your business grow. Our research and development team works hard to find the latest tools and techniques to improve your marketing.",
              },
              {
                title: "Enhancing Community Awareness",
                content:
                  "We're always looking for new ways to help your business grow. Our research and development team works hard to find the latest and greatest tools and techniques to improve your marketing.",
              },
              {
                title: "Your Satisfaction Is Our Priority",
                content:
                  "We're always looking for new ways to help your business grow. Our research and development team works hard to find the latest and greatest tools and techniques to improve your marketing.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:bg-opacity-20 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm sm:text-base mt-2 text-[#EFEFEF]">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
