import React from "react";

const AbbDevelopment2 = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-[100%]  md:h-[450px] bg-white bg-opacity-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start px-6 md:px-12 py-8 md:py-16">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
          App Development
          </h1>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed ">
          We specialize in developing easy-to-use, high-performance mobile applications for both Android and iOS. Our team creates custom applications tailored to your business needs,
           ensuring seamless integration, intuitive design, and seamless user experience. Whether you need a native app or a hybrid solution, 
          we make Your ideas come to life using the latest technology.

          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/fa41/a977/903d68c5d3d0fdcaa27a819d5ca691f3?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gtPra7u~JymUN6e32bgUMlJxCUueEYzn4M-E0PIc3SQWTRXV~EKoa~Pdt9cR6AxiARjsug7pKLMGLFIB2F1dFuViPPkU5Pfq2YFznUUw0ONIUVrbylGDR9ouak3kftMYaxGoEp4NW~Kkqzp1ra3DJFKwHgG5sCb8DDGqRnmoB00FbIyGy8LaVEJuMWcKrS1qDfk-UcCIVku8opm3Yu1gsTMgFm53pKODqSJ7BcdbwxqWK3wwYydYyW2ghGln0Rf2SMtjYU9BhQs2HTfKFW~GEYKmsy9OWAXfZb3E0SooX2FX7mtGa7-JOA1RfEoyeFxCVRaO7yTsXSaMdToqKV5zRg__" 
            alt="..."
            className="rounded-lg shadow-lg object-cover w-full  max-w-[800%] md:h-[350px] sm:max-w-[400px] md:max-w-none ml-5 bg-gradient-to-b from-blue-500 to-blue-700"
          />
        </div>
      </div>
    </div>
  );
};

export default AbbDevelopment2;