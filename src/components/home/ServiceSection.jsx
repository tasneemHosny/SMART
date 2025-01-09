import React from "react";
import { Link } from "react-router-dom"; 
import web from "./../../assets/images/web.png";
import ui from "./../../assets/images/ui.png";
import app from "./../../assets/images/app.png";
import arrow from "./../../assets/images/Icon.png";

const Services = () => {
  const services = [
    {
      icon: web,
      title: "Web Development",
      description:
        "Web development is the process of building and maintaining websites and applications for the internet or intranets. It encompasses various activities such as web design, web publishing, web programming, and database management.",
    },
    {
      icon: ui,
      title: "UI/UX",
      description:
        "UI/UX design refers to User Interface (UI) and User Experience (UX) design, which are two essential components of product design.",
    },
    {
      icon: app,
      title: "App Development",
      description:
        "App development is the process of creating software applications for use on mobile devices such as smartphones and tablets. This includes planning, designing, coding, and testing applications.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="md:text-4xl sm:text-2xl font-semibold font-montserrat text-black mb-[80px]">
        Discover What We Can Do for You!
      </h2>
      <div className="flex flex-wrap justify-center gap-x-9 gap-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative max-w-xs md:w-auto bg-white border-2 border-[#208AB2] rounded-3xl shadow-md p-6 px-4 transition-transform transform hover:scale-105 min-h-[380px]"
          >
            <div className="absolute inset-1 border-2 border-[#208AB2] rounded-3xl pointer-events-none"></div>

            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white border-2 border-[#208AB2] rounded-full h-20 w-20 flex items-center justify-center shadow-md">
              <div className="border-2 border-[#208AB2] rounded-full h-16 w-16 flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="h-12 w-12"
                />
              </div>
            </div>

            <h3 className="mt-12 text-xl font-semibold font-nunito mb-4">
              {service.title}
            </h3>
            <p className="text-med text-gray-600 mb-6 px-2 font-nunito">{service.description}</p>

            <div className="absolute bottom-6 left-0 right-0 px-6">
              <a href="/contact">
                <button className="w-full bg-[#208AB2] text-white py-2 px-4 rounded-3xl hover:bg-[#57a2be] flex items-center justify-center gap-2">
                  Enroll now
                  <img
                    src={arrow}
                    alt="Arrow Icon"
                    className="w-5 h-5"
                  />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
