import React from "react";

const UI2 = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-[100%]  md:h-[450px] bg-white bg-opacity-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start px-6 md:px-12 py-8 md:py-16">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
          UI/UX Design
          </h1>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed ">
          Our UI/UX Design services focus on creating visually 
appealing and highly functional interfaces that provide 
seamless and intuitive user experiences. By combining 
user-centered design principles with cutting-edge tools,
 we craft designs that are not only aesthetically pleasing 
but also easy to navigate. We ensure that every
 interaction is smooth, every screen is user-friendly

          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/9656/73ce/654d19501061d54e68e447559524b833?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kPZytbN01ebAndH-RsYgNvpShm4q8VhW3B-O38XNhV~vek-YIigx5n08jftwSKIy75bccPHvJu0vhrBIzIVHMozlzNXZV-nq7qCMaNqQzTuHTU9ucHxJ9XLTia9am6hv4RqEdjXNWWfpou16aI2oKiieMtwnK9DJgSevf3r7bupZMYQBJ2yEb3D4~iy5YNWN83BSJvkVJBx2ZNGHFWNJh44O0VhxHX-ETobSIr1sKKcOnWkFbRQlXOmJZNZZmubbTag0kAw3x32Sa0YCTWuTzuzimBemQ~6Cwe-oB3ACrpsjmU6dqlONbBiswTFdUaoVa58RwlaJrlZq5bBJeXcDxQ__" 
            alt="..."
            className="rounded-lg shadow-lg object-cover w-full  max-w-[800%] md:h-[350px] sm:max-w-[400px] md:max-w-none ml-5 bg-gradient-to-b from-blue-500 to-blue-700"
          />
        </div>
      </div>
    </div>
  );
};

export default UI2;
