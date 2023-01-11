import React from "react";
import Laptop from '.././assets/laptop.jpg';
 
const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop" />
                <div className="flex flex-col justify-center gap-2">
                    <p className="uppercase text-[#00df9a] font-bold">Data analytics dashboard</p>
                    <h1 className="capitalize font-bold md:text-4xl sm:text-3xl text-2xl">manage data analytics centrally</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci deserunt, in, vel corrupti quos, perspiciatis debitis fugiat quaerat nemo ratione minus porro maxime. Esse ut nihil delectus quo aperiam.</p>
                    <button type='button' className='mt-2 px-6 py-2 bg-green-400 rounded-md font-bold text-black w-[145px]'>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Analytics;