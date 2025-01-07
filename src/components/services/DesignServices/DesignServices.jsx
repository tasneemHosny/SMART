import React from 'react';

  const designServices = [
    {
      title : "Wireframing",
      description : "Wireframing is an essential step in the design process, where we create simple, low-fidelity blueprints of your website or app. These wireframes help visualize the layout, navigation flow, and structure of the interface without focusing on visual design. It allows you to get a clear understanding of how users will interact with your app and how the content will be organized."
    },
    {
      title : "Designing Component Stylings",
      description : "We specialize in designing interactive and visually appealing components for your website or app. From buttons and input fields to dropdowns and navigation menus, we ensure that each component is intuitive, responsive, and perfectly aligned with your brand identity. By using the latest design principles and tools, we craft components that not only look great but also enhance the overall user experience, ensuring a seamless interaction for every user."
    },
    {
      title : "Prototyping",
      description : "Prototyping allows us to create interactive mockups of your website or app, giving you a tangible preview of how the final product will function. This helps validate the design concepts, gather feedback, and make necessary adjustments before moving on to full-scale development."
    },
    {
      title : "UI/UX Development",
      description : "We offer complete UI/UX Development services that combine design and development to create intuitive, responsive, and visually appealing digital experiences. From user research and wireframing to designing sleek interfaces and developing them with modern technologies, we ensure your website or app performs seamlessly across all devices while aligning with user needs and business goals."
    },
  ]  
const DesignServices = () => {
  return (
    <div className='bg-gradient-to-bl from-[#A1A1A1] to-[#3B3B3B] min-h-[100vh]'>
      <div className='w-[80%] mx-auto'>
        <h1 className='text-center pt-4 pb-10 text-2xl sm:text-3xl font-bold'>
            UI/UX Design Process
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-6'>
          {designServices.map(({title,description},idx)=>(
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

export default DesignServices;
