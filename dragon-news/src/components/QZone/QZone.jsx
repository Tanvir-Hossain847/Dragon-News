import React from 'react';
import swimImg from  '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playImg from '../../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-5'>
            <h1 className='font-bold mb-4 primary'>Q-Zone</h1>
            <div className="w-11/12 mx-auto space-y-4">
                <img className='w-full' src={swimImg} alt="" />
                <img className='w-full' src={classImg} alt="" />
                <img className='w-full' src={playImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;