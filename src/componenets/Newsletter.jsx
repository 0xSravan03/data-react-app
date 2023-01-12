import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
          <p>Sing up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row'>
            <input type="email" placeholder='Enter Email Address' className='rounded-md  p-2 w-full text-black outline-none' />
            <button className='bg-green-400 rounded-md font-medium px-6 py-2 sm:ml-4 text-black w-[200px] mt-4 sm:mt-0'>Notify Me</button>
          </div>
          <p className='sm:mt-6 mt-4'>we care about the protection of your data. Read our <span className='underline text-green-400 cursor-pointer'>Privacy Policy</span></p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;