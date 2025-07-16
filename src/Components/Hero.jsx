import React from 'react';

const Hero = () => {
    return (
        <div className='relative'>
            <img className=' w-full h-[500px]  my-[20px] object-fill' src = "https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg" />
            <h1 className='absolute top-[80px] right-[30px] text-[30px] font-extrabold text-shadow-lg/30'>Its all about Good foods and taste</h1>
            <p className='absolute top-[150px] right-[30px] text-[17px] max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas molestias accusamus nostrum atque. Deleniti illum expedita nulla alias ad quidem molestias quisquam sint optio iure error dolores quo, deserunt reprehenderit!</p>
        </div>
    );
}

export default Hero;
