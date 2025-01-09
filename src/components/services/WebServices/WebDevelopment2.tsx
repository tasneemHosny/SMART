import React from "react";

const WebDevelopment2 = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-[100%]  md:h-[450px] bg-white bg-opacity-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start px-6 md:px-12 py-8 md:py-16">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Web Development
          </h1>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed ">
            We provide complete web development solutions tailored to your
            business needs. Whether you need a corporate website, an
            e-commerce platform, or a custom-built web application, our team
            ensures fast, secure, and user-friendly websites optimized for all
            devices.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/7fc5/bf0b/f8e20928901aef59ca6cc6c60f623885?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=piD9D4VKbZQ6FxGzmMNo7vqwUmJ0Su5KhcebaHoKz8VACowyFtTEm-HX30jwf01T7nipszWMgkkx9zfQz868vreX6-ncLyoWtXAwoo2Cqeg9JcE2avY1orQpmYA9drDH2cSQlnPxUKajzX3wEHBj0H7HP97JhhrTjSymy1BDZCBW2zcrvJR1gb9owB-iWkbmb~Q72qC191ud-EWjbWCXbPxbUMwNbgnoeGGsxMvj0QCTWJSrS8lZHtLdbAsbEvAZNj5nKqwhcIx78AWPGAu-4HCW5lkGEJkqFNirXzUP3MHsN7BIq4Ih-wAHeMQdSTFki8CZaGT-sFR0cEZZbgEkNA__" 
            alt="..."
            className="rounded-lg shadow-lg object-cover w-full  max-w-[800%] md:h-[350px] sm:max-w-[400px] md:max-w-none ml-5 bg-gradient-to-b from-blue-500 to-blue-700"
          />
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment2;

