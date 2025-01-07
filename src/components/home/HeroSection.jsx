import React from "react";
import { motion } from "framer-motion"; 
import VRImage from "./../../assets/images/vr.png";

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-left mt-[60px] min-h-screen overflow-hidden">
      <img
        src={VRImage}
        alt="Hero Background Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-left lg:px-20 px-6 sm:px-11 font-nunito">
        <motion.h1
          className="md:text-3xl sm:text-xl font-semibold max-w-[690px] text-black md:leading-normal text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Welcome to Smart technology company –<br />
          The future of your brand is here
        </motion.h1>

        <motion.p
          className="mt-8 md:text-[30px] sm:text-2xl font-bold text-black max-w-[530px] md:leading-normal text-center md:text-left"
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
          className="mt-8 mb-9 md:text-2xl sm:text-xl text-black font-semibold max-w-[580px] md:leading-snug text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          We provide personalized strategies that ensure our clients feel confident and
          at ease with their marketing and get fully supported in <br /> navigating their marketing efforts.
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
