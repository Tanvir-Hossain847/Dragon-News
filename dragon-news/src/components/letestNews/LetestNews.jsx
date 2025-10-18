import React from 'react';
import Marquee from 'react-fast-marquee';

const LetestNews = () => {
    return (
        <div className='flex items-center gap-6 bg-base-200 p-3 primary'>
            <h1 className='text-white bg-secondary px-6 py-2'>Latest</h1>
            <Marquee className='flex gap-5'>
            <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque ullam molestias    .</p>
            <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque ullam molestias    </p>
            <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque ullam molestias    </p>
            </Marquee>
        </div>
    );
};

export default LetestNews;