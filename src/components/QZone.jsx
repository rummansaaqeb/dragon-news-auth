import React from 'react';
import swimming from '../../src/assets/swimming.png';
import classroom from '../../src/assets/class.png';
import playground from '../../src/assets/playground.png';

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='text-xl font-semibold mb-5'>Q-Zone</h2>
            <div className='space-y-5'>
                <img className='w-full' src={swimming} alt="" />
                <img className='w-full' src={classroom} alt="" />
                <img className='w-full' src={playground} alt="" />
            </div>
        </div>
    );
};

export default QZone;