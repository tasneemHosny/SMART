import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import VRImage from "../../assets/images/vr.png";
import VRImageSmall from "../../assets/images/vr-image.png";

const HeroSection = ({ servicesRef }) => {
  const handleScrollToServices = () => {
    // Scroll to the services section with smooth behavior
    if (servicesRef && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center sm:items-start sm:justify-left mt-[60px] min-h-screen overflow-hidden">
      <img
        src={VRImage}
        alt="Hero Background Image"
        className="absolute inset-0 w-full h-full object-fit hidden sm:block"
      />

      <img
        src={VRImageSmall}
        alt="Hero Background Image (Small)"
        className="absolute bg-gray-100 inset-0 w-full h-full object-fit sm:hidden"
      />

      <div className="relative z-10 lg:px-20 px-6 sm:px-11 font-nunito sm:text-left text-center">
        <div className="sm:bg-transparent bg-white bg-opacity-70 sm:rounded-none rounded-lg p-4 sm:p-0">
          <motion.h1
            className="text-[6vw] sm:text-[5vw] md:text-[2.5vw] max-w-[70%] font-semibold max-w-full text-black leading-[1.2] sm:text-left text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to Smart technology company –<br />
            The future of your brand is here
          </motion.h1>

          <motion.p
            className="mt-8 text-[4.5vw] sm:text-[3.5vw] md:text-[1.8vw] font-bold text-black sm:max-w-[60%] max-w-full leading-[1.5] sm:text-left text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            " Skip the complexities and let{" "}
            <span className="font-black" style={{ color: "#127df5" }}>
              Smart technology company
            </span>{" "}
            take your brand to new heights "
          </motion.p>

          <motion.p
            className="mt-8 mb-9 text-[4vw] sm:text-[3vw] md:text-[1.6vw] text-black font-semibold sm:max-w-[60%] max-w-full leading-[1.6] sm:text-left text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We provide personalized strategies that ensure our clients feel confident and
            at ease with their marketing and get fully supported in <br /> navigating their marketing efforts.
          </motion.p>

          {/* Arrow Button */}
          <motion.div
            className="mt-10 cursor-pointer flex items-center justify-start gap-3"
            onClick={handleScrollToServices} // Trigger scroll on click
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <ChevronDown
              size={40} // Adjust size of the arrow
              color="black"
              className="animate-bounce"
            />
            <span className="text-xl font-bold text-black">Cover Our Services</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;