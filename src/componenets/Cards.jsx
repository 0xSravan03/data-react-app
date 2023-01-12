import React from 'react';
import single from '../assets/single.png';
import double from '../assets/double.png';
import triple from '../assets/triple.png';

const Plan = ({img, data, center}) => {
    return (
        <div className={!center ? 'w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300' : 'w-full shadow-xl flex flex-col p-4 my-1 rounded-lg hover:scale-105 duration-300 bg-gray-100'} >
            <img src={img} alt="plans" className='w-20 mx-auto mt-[-3rem] bg-white'/>
            <h2 className='text-2xl text-center font-bold py-6'>{data[0]}</h2>
            <p className='text-center text-4xl font-bold'>{data[1]}</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-6'>{data[2]}</p>
                <p className='py-2 border-b mx-8'>{data[3]}</p>
                <p className='py-2 border-b mx-8'>{data[4]}</p>
            </div>
            <button className={ !center ? 'bg-green-400 rounded-md py-2 w-[150px] mx-auto mt-4 font-bold' : 'bg-black text-green-400 rounded-md py-2 w-[150px] mx-auto mt-4 font-bold' }>Start Trial</button>
        </div>
    );
}

const Cards = () => {
  return (
    <div className='bg-white w-full py-[10rem] px-8'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <Plan img={single} data={['Single User', '$149', '500 GB Storage', '1 Granted User', 'Send up to 2 GB']} center={false}  />
            <Plan img={double} data={['Double User', '$349', '1000 GB Storage', '3 Granted User', 'Send up to 10 GB']} center={true} />
            <Plan img={triple} data={['Triple User', '$849', '2500 GB Storage', '6 Granted User', 'Send up to 50 GB']} center={false} />
        </div>
    </div>
  );
}

export default Cards;