import React from 'react';

  const appServices = [
    {
      title : "Mobile App Design",
      description : "We specialize in creating visually appealing and highly functional mobile app designs. By focusing on user experience (UX) and user interface (UI) design, we ensure that your app not only looks great but also provides an intuitive and seamless experience. Our design approach adapts to your brand's identity while prioritizing usability to keep users engaged and satisfied."
    },
    {
      title : "Native App Development",
      description : "Our team excels in developing high-performance native apps for both Android and iOS platforms. By using platform-specific languages such as Swift and Kotlin, we ensure that your app runs smoothly and efficiently. Native development allows us to leverage device features to create fast, responsive, and reliable applications tailored to your business needs."
    },
    {
      title : "Hybrid App Development",
      description : "We offer hybrid app development that works across both Android and iOS platforms using modern frameworks like React Native and Flutter. These solutions allow for faster development, lower costs, and a unified user experience across devices, making them ideal for businesses looking to reach a wide audience while optimizing their budget and time."
    },
    {
      title : "App Maintenance & Support",
      description : "Our services extend beyond just app development. We offer comprehensive maintenance and support to ensure your app continues to perform well as technologies evolve. Whether it's updating features, fixing bugs, or ensuring compatibility with the latest OS versions, we provide ongoing support to keep your app at its best and deliver a smooth user experience."
    },
  ]  
const AppServices = () => {
  return (
    <div className='bg-gradient-to-bl from-[#A1A1A1] to-[#3B3B3B] min-h-[100vh]  py-16'>
      <div className='w-[80%] mx-auto'>
        <h1 className='text-center pt-4 pb-10 text-2xl sm:text-3xl font-bold'>
            Mobile App Process
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-6'>
          {appServices.map(({title,description},idx)=>(
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

export default AppServices;
