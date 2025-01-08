import React from 'react';

const technologiesImages = [
  {
    alt: "figma",
    className: "w-[201px] h-[201px] rounded-[40px]",
    src: "https://s3-alpha-sig.figma.com/img/3155/de47/8845475531d08d867f893ea33c9247e7?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CEtye8Ez7MZPY5ETft6b76wO7OP~2Idwb~DsI7gyuxFh25ueAzTzd7iHHx6f3zNpCELSFVH97kjDSiWPkRp-lTHCWb5R2UN0jiVb2353kCQTMCeRx-1ZPZlv32ujopZkG4F305q3SpkTfIEKruXZ6Pk7Ik5FryNnphmYGIvIQC09tNSryQ9X9kTBhVk7eJmK3Aud5DlurD8LCr5-Sr3dmqQOVEFE0qhse0FZ~AtmpVw4H1C33O3zKFL9FOHDFGfPUWWMCjnRQxWiNRoLDA0yWFGNlq-xa6W9vv4wvGQujkRlISzQWX4X2j54pV3FivdK9J3HY2Y3vkzAaa8l6MY8Pg__",
  },
  {
    alt: "xd",
    className: "w-[202px] h-[202px] rounded-lg",
    src: "https://s3-alpha-sig.figma.com/img/6dea/cb79/a6412160bfcb83037a18848f6be4e071?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PcZfCYKTOYm-ktY4JP6QZik19y9qCwZmexwYJBmEE5GLAXgJdk44fcHlUpJqtL4XFbzbFShSyPCQpHv6C2bPM6V0oykemRHtya7cIK47w1PZmfsVVXFsZufwn~nrI7wC3QIVmHN4f0uvH5e8uqjYz1ghswaK6o8-0To0V6UEbIiy0BnhhIoTOKAbKE1J5yz60pUMo9rZijaKNpRPnBE~j41cymeJJ-XuzF4zXvIPyVZSk3DPE9lkb7B6r-9Wyis4fnQJ76FUy5B4To8BFf4rGCljF5L7glL4f4Xe8Qr74QZipIMOG05mLx89BjCkBqd7702Rg5GJVQBnx4ZBtnYejA__",
  },
  {
    alt: "AI",
    className: "w-[186px] h-[204px] rounded-lg",
    src: "https://s3-alpha-sig.figma.com/img/f48e/260a/0b984ab5f78201d2066d86523622e977?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLh-Wq~G5mOF5EZdIKFuLsaveBxZSMiwCAQLVFh7szy~vuzLUYDxFNk57u6nK-G9nRLFa3akxMeqEWIm~kKtSXCHWdERQyEwrCkouIjwvggjKmErW83NhkB4u0~1vberoZa9mxriKCqoISlceEO2F~76b125C83v4XD9iy8vgRCkVtSYq~ZY2qHAlNPUdfEr3hK2hJwmWozDZ5jWe9zCxrONDP5stMpSOpZbPQU6IEnuuY0Xbm5VfwLa33~xDkUr1pwnCGUzVPcahXnhIsMI22bNJZ8UqIH0ZZaPw~by3HI-UHTgXoI331n-~-xX56gDuGPguNKhDxooIgmwD3K7Xw__",
  },
];

const AppTechnologies = () => {
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

export default AppTechnologies;
