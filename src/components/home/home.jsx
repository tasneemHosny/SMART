import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection"; 
import Services from "./ServiceSection";
import Clients from "./ClientSection";


const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <HeroSection />
      </section>

      <section className="about-section">
        <AboutSection />
      </section>

      <section className="services-section">
      <Services />
      </section>

      <section className="client-section">
      <Clients />
      </section>
    </div>
   
  );
};

export default Home;


{/**import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import VRImage from "./../../assets/images/vr-image.png"; 

function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  useEffect(() => {
    const updateMousePosition = (event) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = event;
      targetRef.current.style.setProperty("--mouse-x", `${clientX}px`);
      targetRef.current.style.setProperty("--mouse-y", `${clientY}px`);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="home">
   
      <section
        ref={targetRef}
        className="relative h-screen flex items-center justify-start bg-cover bg-center"
        style={{ backgroundImage: `url(${VRImage})` }}
      >
        <div className="relative z-10 px-6 ml-[80px] text-left max-w-[800px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:text-4xl sm:text-2xl font-semibold text-black md:leading-normal"
          >
            Welcome to Smart Technology Company –
            <br />
            The future of your brand is here
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 md:text-[40px] sm:text-2xl font-bold text-black max-w-[530px] md:leading-normal"
          >
            " Skip the complexities and let{" "}
            <span
              className="font-black"
              style={{ color: "#127df5" }}
            >
              Smart Technology Company
            </span>{" "}
            take your brand to new heights "
          </motion.p>

          <motion.p
            style={{ opacity, scale }}
            className="mt-8 md:text-[29px] sm:text-xl text-black font-semibold max-w-[650px] md:leading-snug"
          >
            We provide personalized strategies that ensure our clients feel
            confident and at ease with their marketing and get fully supported
            in navigating their marketing efforts.
          </motion.p>
        </div>
      </section>

    
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 px-6 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="pointer-events-none absolute -inset-px opacity-50"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 80%)",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-blue-900 sm:text-7xl">
              About{" "}
              <span className="bg-gradient-to-r from-[#127DF5] to-[#0A5BC4] bg-clip-text text-transparent">
                Smart
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-blue-700">
              Innovating at the intersection of web, mobile, and artificial
              intelligence
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
 */}