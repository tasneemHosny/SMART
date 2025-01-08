import React from 'react';

  const webServices = [
    {
      title : "Design Services",
      description : "We provide key design service and highlight technology to improve user experience and attract visitors. From designing modern user interfaces to creating interactive experiences, we focus on providing distinctive account designs that identify your brand and the necessity of your audience."
    },
    {
      title : "Technical",
      description : "We leverage the latest technologies and tools to develop high-performance, secure, and responsive websites. With expertise in front-end design, back-end development, and database management, we ensure your website meets all your business needs and stays ahead of modern trends"
    },
    {
      title : "Fully Responsive Design",
      description : "We ensure that our websites perform seamlessly across all devices and screen sizes. Whether you're using a desktop, tablet, or mobile phone, our designs adapt perfectly to provide an optimal user experience. With flexible layouts and responsive designs, your site will be easily accessible anytime, anywhere."
    },
    {
      title : "Fast Loading Speed",
      description : "We prioritize fast loading times to ensure a smooth browsing experience for your users. Our websites are optimized for speed, reducing load times and improving overall site performance, which helps increase user engagement and boosts your SEO rankings."
    },
  ]  
const WebServices = () => {
  return (
    <div className='bg-gradient-to-bl from-[#A1A1A1] to-[#3B3B3B] min-h-[100vh]'>
      <div className='w-[80%] mx-auto'>
        <h1 className='text-center pt-16 pb-10 text-2xl sm:text-3xl font-bold'>
          Expand Your Business with High-Performance,<br />Optimized Websites!
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-6'>
          {webServices.map(({title,description},idx)=>(
            <div key={idx} className='bg-white p-8 rounded-lg shadow-lg'>    
            <h2 className='text-[#127DF5] text-2xl font-bold mb-4'>{title}</h2>
            <p className='text-md font-semibold'>
              {description}
             </p>
             </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default WebServices;
