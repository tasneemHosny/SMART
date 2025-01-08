import React from 'react';

const technologiesImages = [
  {
    alt: "php",
    className: "w-[224px] h-[224px]",
    src: "https://s3-alpha-sig.figma.com/img/a42d/f83d/b6f282ece6622a30f9020a7c22cfb4cc?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VmhdpDEq0Lp6fVK5eXpJvlnxwRokJPCJIn6O9eQ1hc2CysJ294Ad7cNgiV2lzxSOUtzexOleP2G-Ajk2IXwMas~n3bzN0tcBKzdsbKuAASs6rtmWyvKZpGFg-5PN1CNT7~edxdYf5fz5z9Vgzl2YFEyugsSW9KUdOD3kdvN4Aumji5YL1TiA3YS8BySJxrUxHqqrzdqjU2gW0NP94mY6D-sV~SGFWXviI3SfbAFXfGbfaoomKXaL6DlYjWkFK88cVIBrm1~D8ViWeUszXS1IxdzPeodmT61VYJ8BqS8uuWlTOOpf0D3xFKvAwE5LBniQ19HRybKmrBZzoW0p13Ka~g__",
  },
  {
    alt: "laravel",
    className: "w-[224px] h-[224px]",
    src: "https://s3-alpha-sig.figma.com/img/9af9/2e9f/1dd374b9cfbfd14f7099b5672f96000b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kkz1655WIayuO7TXgVI9qg9W53meo~Vm1o6j9~MRzrcAwAQtPM2fxz5wwy7obpiqa0bpNfYTK6FkIIsBSxSka0rgv4r4AELgIdbjx4vUOQ04SN077Uvxx3aNuutZejkWS-btUnbKdTVve0Wpndw-1k8dPmb~MUpcKenwC~kLD7JKQD6J8mWxplHDZS~4kWP8uiNAc6c1BcLT7rd4E~lh5wpoFAHOqL-9h8kGHCKmco0k8NL9bNzRwIhsMb6z3wrsijlokhSD-U0v-G-0e2SXGvA6bJLiW9wAS9eVLuulTnC~Uu7JW-cn2UToqwoCd8wXVd0AWrHum~f0a~~HZZhD1w__",
  },
  {
    alt: "python",
    className: "w-[175px] h-[192px]",
    src: "https://s3-alpha-sig.figma.com/img/7c9a/6897/0b2d3237625a349dc5a6c9b692fc680f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJNzOHJF6YVXY3joQX32GyTZgnxdTAwClkIa2~LnuyGe1m684v7WpBBqgqFOcjvSf~EXfimKVnyFLok3neJtFFEio1kE4gufU9SKH8BaPHP6aBQH6hezMtWksLhStpumxrnTOpxlzxMN6wPPbrn-5II~2X8DMkm22JmG~BhiEk3826aq-tW3dIDA4~m1CLDJWZcYCCEnGau4u7Eye7Se9ZGcWFhV9NN6QcBS2hUE0oIBkYc12Wbbc5n2bOEFQ5oU8ZLPH9F3EurDKqQkh9l8iZnp0kT4JY9YgC84t~oMOVVZwB3~WbgTFY7dxXGklGKcs8bOVdYzMZSGU20H-UKFOg__",
  },
  {
    alt: "node",
    className: "w-[224px] h-[224px]",
    src: "https://s3-alpha-sig.figma.com/img/f3f4/fc2a/a9846b5626dd8c020b970916c675c300?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PG-GSLve9PEUnPIVu9hFkqK8G~JpUDfFAEsdmTOeQLdsOY-vEvMpslS~Q~f9yCoEPmTjbce3GiZUiD2mmbE-3h2XFvTeli-TlxRAZnmga2DwhfNlI1cKmgDXixE9Glmp7HAgOP7fLsK1QCGxI3LnARnfHFj32myOlD0YjbULT6g6b04MXpvwlUQl-f33ppd5-FV4ssno7eFAKD82uwd49bSEt3fYp8uVmT47s9IksyIVC1RBD~9KPhTV1jvjVbg99WL0k14YbVVVOXAuDap80ruIyOHA~NojnvuvQ2Fu8EVjPRDx9lnebGIhDrMvjZLnsQuD-AfQsfzoe47a0oUn6w__",
  },
  {
    alt: "react",
    className: "w-[224px] h-[224px]",
    src: "https://s3-alpha-sig.figma.com/img/2373/32d5/9511c09f525c0085218f9ca1a0d02428?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j2Enm0kKWmfYWsBJP0UkmAezsw85UI1qjijpWMROEUDEg8NGikui9ri41qmxs2t83AgXdcVi8KGh~T89Rm4lj~cylpR3~MB~JLEXpykVRo-idPRbZcWYC6kk8uTqnsxmk8J9kc6JlheuzxIbKpYy6we6ggsQDGxaEEqHtGsQlOIBYnYkiFUCWP7dQMEJlFB6YJIeukrIeKnwwupNazNlsy4CgPl4ZWQpOjWiON62RC43V8hOOgf5cDA6OhgH5drKoRdrDutGaHK3kAGUQcvspVYP5h52bKSmaNJhi6AsFWMcwEcUml6ao7uBCaEOS3GxGrKoQoDDzaR7CZzO3s6bdQ__",
  },
];

const WebTechnologies = () => {
  return (
    <div className=''>
      <div className='w-[90%] mx-auto py-16'>
        <h2 className='text-center text-3xl font-bold text-[#127DF5]  '>
          Technologies we use in our company
        </h2>
        {/* Responsive Layout */}
        <div className='flex flex-col lg:flex-row items-center justify-center lg:space-x-6 space-y-6 lg:space-y-0'>
          {technologiesImages.map(({ alt, className, src }) => (
            <img key={alt} className={`${className}`} src={src} alt={alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebTechnologies;
