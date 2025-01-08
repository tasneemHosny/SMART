import React from "react";

const AbbDevelopment = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 text-white flex items-center justify-center min-h-screen px-4 ">
      <div className="w-full max-w-[100%] h-auto md:h-[450px] bg-black bg-opacity-40 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start px-6 md:px-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-5 mt-7 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-7 md:mb-6">App Development

</h1>
          <p className="text-base md:text-lg leading-relaxed">
          We develop intuitive and high-performance mobile apps for both Android and iOS,
           tailored to meet your business needs.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/08b5/e718/992be71439cfb0d454a65e140ef0f0aa?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UJT6g8zbbQUV5UeQMY~W76K1w-Kt5-8mHH5Y1IiEoAmN7zqfa1a~nEvCOpUCGCN9rf9KLjXihemtNYpJkBrievU1H3TpIKHx4tdZTSv95zcgksS9XDMBPf-UZXeb501ltU3TNYylwqFlM5iGMH3K~f~l9tUMksVkiHGjKd6aP96z4a2zux3NZKprF31jEWEUzvCT5AjhLNxRwVp1Cel50avHKLPUeFb0td-Xjr78W5nMunRpPWcfc1kiPY6t~2ipqhgRbRiapa9REczNxBKdwMnxQ7KzuLKudNU36PsYnRV8A~NbNHWQjDYsha1t8Vf86~lYnUvAbMb7~qUN-qU-QA__"
            alt="..."
            className="rounded-lg shadow-lg object-cover w-full max-w-[100%] h-auto md:h-[450px] md:max-w-none mb-6"
          />
        </div>
      </div>
    </div>
  );
};

export default AbbDevelopment;