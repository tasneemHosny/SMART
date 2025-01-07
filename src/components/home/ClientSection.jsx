import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "./../../assets/images/ZKT.png";
import logo2 from "./../../assets/images/chemia.png";
import logo3 from "./../../assets/images/laam.png";
import logo4 from "./../../assets/images/swiss.png";

const Clients = () => {
    const stats = [
        { value: "2M+", label: "Total Downloads" },
        { value: "30K+", label: "Positive Reviews" },
        { value: "13K+", label: "Happy Users" },
    ];

  const logos = [logo1, logo2, logo3, logo4];

  const settings = {
    dots: false,
    infinite: true, 
    speed: 2000, 
    slidesToShow: 5, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, 
    cssEase: "ease-in-out", 
    pauseOnHover: true,
    focusOnSelect: false, 
    swipe: true, 
    adaptiveHeight: true, 
  };

  return (
    <section className="bg-[#208AB2] text-white font-montserrat py-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-8 sm:mb-12 md:mb-14">
        Meet Our Happy Clients
      </h2>
  
      <div className="flex flex-wrap justify-center gap-16 sm:gap-10 md:gap-[150px] mb-10 md:mr-6 sm:mr-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center sm:w-full md:w-auto">
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-semibold mb-6">{stat.value}</h3>
            <p className="text-lg sm:text-xl md:text-2xl font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
  
      <div className="relative overflow-hidden bg-[#57a2be] py-8">
        <Slider {...settings}>
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center cursor-pointer focus:outline-none"
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-16 sm:h-20 md:h-22 transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-2"
                tabIndex="-1"  
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
  
  
};

export default Clients;
