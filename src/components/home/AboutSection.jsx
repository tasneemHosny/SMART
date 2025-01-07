import React from "react";
import ScreenImage from "./../../assets/images/screen-image.png";

const AboutSection = () => {
  return (
    <div className="relative flex bg-[#208AB2] min-h-screen">
      <img
        src={ScreenImage}
        alt="A background showcasing Smart Technology"
        className="absolute right-0 w-full sm:w-2/3 h-full object-cover z-0" 
      />

      <div className="absolute inset-0 bg-black bg-opacity-70 sm:block md:hidden z-10"></div> 

      <div className="relative z-20 text-left lg:px-20 sm:px-12 pt-9 px-6 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl sm:text-xl font-bold text-white mb-6 uppercase font-montserrat">
          About Smart Technology Company
        </h2>
        <p className="sm:text-lg md:text-xl text-[#EFEFEF] font-semibold leading-relaxed mb-6">
          Our mission is turning great ideas into reality.
        </p>
        <p className="text-[#EFEFEF] md:text-2xl font-bold sm:text-xl leading-relaxed mb-4 max-w-[600px] font-nunito">
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
              maxWidth: "max-w-[600px]",
            },
            {
              title: "Enhance Our Community Awareness",
              content:
                "We're always looking for new ways to help your business grow. Our research and development team works hard to find the latest and greatest tools and techniques to improve your marketing.",
              maxWidth: "max-w-[500px]",
            },
            {
              title: "Your Satisfaction Is Our Priority",
              content:
                "We're always looking for new ways to help your business grow. Our research and development team works hard to find the latest and greatest tools and techniques to improve your marketing.",
              maxWidth: "max-w-[415px]",
            },
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
              <p className={`${item.maxWidth} text-[#EFEFEF] mb-6`}>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
