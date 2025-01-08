

import React from "react";

const WebDevelopment = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 text-white flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-[100%] h-auto md:h-[450px] bg-black bg-opacity-40 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start px-6 md:px-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-5 mt-7 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-7 md:mb-6">Web Development</h1>
          <p className="text-base md:text-lg leading-relaxed">
            We develop and program websites in collaboration with programming
            concepts to enhance best in class for your business.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/f18e/297c/0c47e1e465e3fab31f2e435b8e683509?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JlTteEcREEmxHCSM0qCI7YheNZQKWkzPwMq4PX1cKuQFLR4h0hJtw0odh9oodui0pHEyeic0tkuZlD-SBpIt7Eiv8m7GIRDq0iIqvefraYtp6PBI8oxN80FC3zNdMYSRJmO4PiOZqnN1d7eo0t2vljr~xjfq4Va0kpHL2xKR6qcfAxEeK7IYEM1jCsHSGNgJHSQsn6y0eFp9GLvlKbltjv1Uu8OgfYSNMux4EZirTF6vXyasbDRILMH5hoRskNs8IaMRCSjfEckiKtRtMSJ6aa26kXC-yLLoKeQPku6FfaNJo7Ek0Fcl7PKfQh7u5HJv7O-WzpEzeI1KW-2VjQv8hw__"
            alt="..."
            className="rounded-lg shadow-lg object-cover w-full max-w-[100%] h-auto md:h-[450px] md:max-w-none mb-6"
          />
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
