import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] w-full mx-auto text-center mt-20'>
        <p className='uppercase text-[#00df9a] font-bold p-2'>Grow with data analytics</p>
        <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold s300:text-3xl'>Grow with data.</h1>
        <div className='mt-5 flex font-bold md:text-5xl sm:text-4xl s300:text-xs text-xl justify-center items-center'>
          <p className='md:pr-4 sm:pr-3 pr-2'>Fast, Flexible Financing for</p>
          <Typed className='text-gray-400' strings={['BTB', 'BTC', 'SAAS']} typeSpeed={120} backSpeed={140} loop />
        </div>
        <p className='mt-4 px-8 font-bold md:text-2xl sm:text-xl text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC & SAAS platforms</p>
        <button type='button' className='mt-5 px-6 py-2 bg-cyan-500 rounded-md font-bold text-black'>Get Started</button>
      </div>
    </div>
  );
}

export default Hero;