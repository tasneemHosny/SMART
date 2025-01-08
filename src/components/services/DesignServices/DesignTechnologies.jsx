import React from 'react';

const technologiesImages = [
  {
    alt: "figma",
    className: "w-[201px] h-[201px] rounded-[40px]",
    src: "https://s3-alpha-sig.figma.com/img/cd9e/e6a5/f455f4042acbf1226d3c89738ffddcda?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PZ8mM3JFuiGspunzFtIsLOxCtW8l6hfRRXAYeQiPV7vSAe8SOQ6laNcaah2y9FOWtBVdkp-dPzHu2aVynJCzAPxvOLvzzkXUxTVjA1EOdgWnx4CAnXWr9VlGkiwF8RqI9o51l11y2pFzzxUCwqiucjfB-53k903086y3C0Ip4HCf6JMtDTo0L0W85IbJ~Iz85eSDNsO6xf2~ziCE5fCVJyEHelwH4btFTS0tTmw-viP~DeJSmXMzxNBiLGuMcL6pXI401p7Lo8iBplDCiae~uCI4GI0OUPS6z~OZ1rIqQWyFGiPp-WAb~6T0VIXWpwSqeItVpmecV3Vl96R7E4SNWg__",
  },
  {
    alt: "xd",
    className: "w-[202px] h-[202px] rounded-lg",
    src: "https://s3-alpha-sig.figma.com/img/4543/fec5/fc5d586e7c23fa32aa00b1fe64f08f35?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GiGMWQgyEQEoDw22pSAb0YmfsImZUimc92JiA8AlCI~YUxO8b6Je1LmYjBdiYyeJyzOWRkMiqavXuSNXHbsOdhAdb8o904bszlgdExmnSTHrkbFdqYrPLJcWn3PVq4H6yWJKLi2wx4l84SMfnyY6g3LOEWZR0hCN~~lrms27MPcb8AVw695nGubE~X-JaH-yxbG4K5V4pMiMuuxvDb0LnzD~laV~ypS1cFTQcnbvqdPldBRSwv4eoVixxpjPQKXgGfOu4PeI92uka9FxxuTZPV8SAZz8BHACfO1sbRaDDelyTsysPD0fcViiGbxqUL2Tup0NclGaiVRP3ozWTd3-ow__",
  },
  {
    alt: "AI",
    className: "w-[186px] h-[204px] rounded-lg",
    src: "https://s3-alpha-sig.figma.com/img/f2fd/fa45/3f4650935b76f0f6cad99a542833b938?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pZS36m3G3KnUkGjlCfPEDlLKDj1eqmRNYjsQFJe3qDMInjp-4llyx~xRc3koUG7BH~bPDGKfbhO1lfEhxph5N0OkvaxqX0Unet3WEXCEXfo5adg5m81VMWwa-NzLobzRMpffDQT2RdeKMyIGNsHjxEYp-QY1VSEf5H3QMK2qOEPHG57~YBjl-Wd2pdsv0U~PE50hQgpKy-2eRAtNiY-VR7QZDKRgp0M7YpgdHZWzAijlUYxb8GbUKJCQfy6DDlnsVbg0ohmvX8ZLE0yXoS9Keyk~WjsO1x6honUeOqOgObjchBwfoIAHwSlhZ~2M2bTY0TDWWSbmksRAqxXL3PhhTA__",
  },
  {
    alt: "photoshop",
    className: "w-[185px] h-[203px] rounded-lg",
    src: "https://s3-alpha-sig.figma.com/img/088a/e58b/8dce60f05c335cb0284a897165b0b522?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M0i2K~FgtVrOD~752vIncff12EHB26kwmp8i-qQYOOF1ewSiFbrpPT-nS3jVEbAZT2l9vJmaSXhIlW2DLLHwefs3hvpwQ2kjbUyzEer1gL3hl4JlWbpZrxUpxyFequWEVP23BZ2A6Yk-J7sG72OP~PPLeir87w4WnKgGW-uT79FtqT3DpcVa9Fd5VPaH34HPqZ0GZ5xyGgWKxQnxiLui69khxhJstDpN-5PB05D9zXuP8akZhxEgeMkYYCU7JWZzUcp8p72ccbpZm5Pegp4w3iwDv4e-CHr-me2hLd0sgL-rcbyvyvdndQWtU2XXYdy8OvLqFGjUxyqHGzSKPiI8ew__",
  },
];

const DesignTechnologies = () => {
  return (
    <div>
      <div className='w-[60%] mx-auto py-16'>
        <h2 className='text-center text-3xl font-bold text-[#127DF5] pb-12'>
          Technologies we use in our company
        </h2>
        {/* Responsive Layout */}
        <div className='flex flex-col lg:flex-row items-center lg:space-x-6 space-y-6 lg:space-y-0'>
          {technologiesImages.map(({ alt, className, src }) => (
            <img key={alt} className={`${className}`} src={src} alt={alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignTechnologies;
