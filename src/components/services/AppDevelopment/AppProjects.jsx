import React from 'react';

const AppProjects = () => {
  return (
    <div className='bg-gradient-to-bl from-[#127DF5] to-[#0B498F] min-h-[100vh] py-16'>
      <div className='w-[80%] mx-auto'>
        <h1 className='text-center pt-4 pb-10 text-2xl sm:text-3xl font-bold'>Our company projects in Mobile Development</h1>
        <div className='flex flex-col md:flex-row'>
          <img 
            className='w-full md:w-[50%] h-[300px] md:h-[500px] rounded-md order-1 md:order-2 mb-6 md:mb-0'
            src="https://s3-alpha-sig.figma.com/img/c4da/289e/cbf4bb0f5d8da994ab1097bbf1280cdf?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ndn5VVmVEewByMDDfQor54oor4dw2JfxTSeqE09trV2A29Z25lWw4OjGOX5G053hSnI9~77J~v6fv2Pm0V8WnFJXFn4BJki7gyhJvCRRHZyStBsEX2Z~3KGIX3pxwrnNZTH2XGooBkwiLnvyiHqvcC9~Hpi9aLhf3Tm~9MWSR1-QIRgIwQgk395tJYYSibg741o-CSVVkeatw-85tpCLRChuuJoCtrXmSCSrkBtVu8Q9PprKsZWilKgDu3yJLzJHVrXw0siYMwR3QxRhf-Oa9y50jgf7GoTb-Jfg53phKyiUPsaJdsqztjo1YLtZPtdTv1VLJ0-wFVG6922ODm6lDw__" 
            alt="Web Development Project"
          />

          <div className='pr-0 md:pr-8 z-10 order-2 md:order-1 w-full md:w-[60%]'>
            <h2 className='text-4xl text-white font-bold pt-4 pb-6'>Smart Car</h2>
            <p className='leading-8 font-bold'>
            Our Smart Car App offers an innovative, autonomous driving experience, allowing users to control their vehicle without the need for a driver. With advanced AI and GPS technology, our app enables safe and seamless navigation, while providing features like route optimization, real-time tracking, and remote control. Whether you're looking to get from one place to another or simply need your car to autonomously handle tasks, our app provides the convenience and security of fully autonomous driving, ensuring a futuristic and efficient journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppProjects;
