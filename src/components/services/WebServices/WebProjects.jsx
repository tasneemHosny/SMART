import React from 'react';

const WebProjects = () => {
  return (
    <div className='bg-gradient-to-bl from-[#127DF5] to-[#0B498F] min-h-[100vh]'>
      <div className='w-[80%] mx-auto'>
        <h1 className='text-center py-16 text-2xl sm:text-3xl font-bold'>Our company projects in Web Development</h1>
        <div className='flex flex-col md:flex-row'>
          <img 
            className='w-full md:w-[50%] h-[300px] md:h-[500px] rounded-md order-1 md:order-2 mb-6 md:mb-0'
            src="https://s3-alpha-sig.figma.com/img/71f9/7ed9/7c82c934069c23b946c1eacc2784a737?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oCWfkEEZJPNflI6BIXGFmJaqHOoLD95NMIgMMd-1hCGfklEUNayVP7TEEXrbXBMEoFEeCURm9irYz8uwJEoN52dTpQ9VnaqH5pXpw2QV68mhtcVh3eBAIewKVEXwze8cjEJG9z8YftvM788VaXpX1w~sqZ0~fCbgEHzxC2hi~C7z1k~8utW7KJsVfv9Nia2QfK4cAcS8-aemlzNpRHFrg2QHTUwdMR-zycNmVDq58~koHElVKZmmXfXyWoGmksSVvzSNKm271eLAyhquJfxfDS47yp5p4-wmoZiZyZVA78RVI~Kj3mgqzKt-hNDVp8ix9i03o17SP9m9WLtokp7aCQ__" 
            alt="Web Development Project"
          />

          <div className='pr-0 md:pr-8 z-10 order-2 md:order-1'>
            <h2 className='text-4xl text-white font-bold pt-4 pb-6'>Lorem ipsum dolor sit amet consectetur.</h2>
            <p className='leading-8 font-bold'>
              Lorem ipsum dolor sit amet consectetur. Dignissim purus id ultricies venenatis
              ac nec vivamus tristique eget. Id velit convallis etiam in vulputate sed. Neque facilisis tempor egestas
              quisque adipiscing nibh nibh pharetra. Vel maecenas adipiscing quis rutrum tellus at porttitor nullam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebProjects;
