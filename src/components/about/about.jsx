import "./about.css";
import blueZone from "./../../assets/images/blue-zone.png";
import signalImg from "./../../assets/images/signal.png";
import ab1 from "./../../assets/images/ab1.jpg";
import ab3 from "./../../assets/images/ab3.jpg";
import ab4 from "./../../assets/images/ab4.jpg";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Brain } from "lucide-react";
import ScrollToTopArrow from "../../ScrollToTopArrow"; 


const services = [
  {
    icon: <Code className="mb-4 h-12 w-12 text-blue-600" />,
    title: "Web Development",
    description: "Crafting responsive and performant websites",
  },
  {
    icon: <Smartphone className="mb-4 h-12 w-12 text-blue-600" />,
    title: "Mobile Apps",
    description: "Building native and cross-platform mobile applications",
  },
  {
    icon: <Brain className="mb-4 h-12 w-12 text-blue-600" />,
    title: "AI Solutions",
    description: "Integrating intelligent features and machine learning",
  },
];

function About() {
  const targetRef = useRef(null);

  return (
    <div className="about">
      {/* 1. Start online Dreams */}
      <section
        className="onlin_dream"
        style={{ backgroundImage: `url(${ab1})` }}
      >
        <div className="container">
          <h1>
            We Craft Your{" "}
            <span style={{ color: "#FE674F" }}>online Dreams</span>
            <br />
            CONSEPT into reality
          </h1>
          <p>
            Get online protection secure cloud storage and <br />
            innovative apps designed to fit your needs - all in <br />
            one plan.
          </p>
        </div>
      </section>
      {/* 1. End online Dreams */}

      {/* 2. Start About smart */}
      <section
        ref={targetRef}
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 px-6 py-24"
      >
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
                smart
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-blue-700">
              Innovating at the intersection of web, mobile, and artificial
              intelligence
            </p>
          </motion.div>

          <motion.div className="grid gap-12 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-blue-300 bg-white/80 p-8 backdrop-blur-sm transition-all hover:bg-white"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[#127DF5] to-[#0A5BC4] opacity-0 blur transition-all duration-500 group-hover:opacity-20" />
                <div className="relative">
                  {service.icon}
                  <h3 className="mb-2 text-2xl font-semibold text-blue-900">
                    {service.title}
                  </h3>
                  <p className="text-blue-700">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16"
          >
            <div className="relative rounded-2xl border border-blue-300 bg-white/80 p-8 backdrop-blur-sm">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-rfrom-[#127DF5] to-[#0A5BC4] opacity-5 blur" />
              <div className="relative space-y-6 text-lg leading-relaxed text-blue-900">
                <p>
                  At Smart, we're not just another tech company. We're
                  innovators, problem-solvers, and digital architects crafting
                  the future of technology. Our expertise spans across modern
                  web development, cutting-edge mobile applications, and
                  state-of-the-art artificial intelligence solutions.
                </p>
                <p>
                  Our team of expert developers and AI specialists work in
                  perfect harmony, creating intelligent, scalable solutions that
                  propel businesses into the digital age. We don't just keep up
                  with technological trends – we set them.
                </p>
                <p>
                  From agile startups to industry titans, we've delivered
                  transformative digital solutions that marry stunning
                  interfaces with powerful AI capabilities. Our mission? To help
                  our clients not just navigate, but conquer the ever-evolving
                  tech landscape.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 text-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center rounded-full bg-[#127DF5] px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700"
            >
              Get in touch
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" />
            </a>
          </motion.div>
        </div>
      </section>
      {/* 2. End About smart */}

      {/* 3. Start page3 */}
      <section className="page3">
        <div className="content-wrapper">
          <div className="image-column">
            <img src={ab3} alt="imgs" height="510px" width="430px" />
          </div>
          <div className="text-column">
            <div className="Our-culture">
              <div className="header-container">
                <img
                  src={blueZone}
                  alt="blue"
                  height="20px"
                  width="20px"
                  className="im"
                />
                <h3>Our Culture</h3>
              </div>
              <p>
                At Smart, our culture is the driving force behind <br /> our
                success and innovation. We are committed to <br />
                fostering an environment where Planning and <br /> Analysis,
                Collaboration, Excellence, and innovation. <br />
                Together, these values empower us to deliver the <br /> best
                possible outcomes, both for our clients and <br /> the
                technology landscape as a whole.
              </p>
            </div>
            <div className="our-vision">
              <div className="header-container">
                <img
                  src={signalImg}
                  alt="signal"
                  height="20px"
                  width="20px"
                  className="im"
                />
                <h3>Our Vision</h3>
              </div>
              <p>
                Our vision is to be the leading technology company <br /> in the
                Middle East. With our wealth of expertise <br />
                extensive industry experience, and highly qualified <br /> human
                resources, we aim to transform the digital <br />
                landscape of the region. We are committed to <br />
                delivering excellence, driving innovation, and <br />
                creating impactful technological solutions that set <br /> new
                industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 3. End page3 */}

      {/* 4. Start page4 */}
      <section>
        <div className="container2">
          <div className="elevating">
            <p className="we_grow">
              WE GROW BUSINESSES BY CREATING EXPERIENCES <br /> PEOPLE LOVE
            </p>
            <h1>
              Elevating Your <br /> Brand Together
            </h1>
            <p>
              As dedicated collaborators in your success, we are <br /> deeply
              committed to advancing your business <br /> alongside our own. Our
              mission is to <br />
              <br /> understand your vision, align our strategies, <br />
              and collectively propel your brand to <br />
              unparalleled heights.
            </p>
          </div>
          <div className="image-container">
            <img className="img-container2" src={ab4} alt="ab4" height="600px" />
          </div>
        </div>
      </section>
      {/* 4. End page4 */}
      <ScrollToTopArrow /> 
    </div>
  );
}

export default About;
