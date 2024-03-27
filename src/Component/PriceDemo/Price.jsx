 import React from 'react';
 import PropTypes from 'prop-types';
import Feature from './Feature';
 
 const Price =({pric})=> {
    console.log(pric)
    const {name, features,kg} = pric
    return (
        <div className='bg-blue-700 p-9 text-white flex flex-col'>
           <div className='flex-grow'>
           <h1 className='text-center'>
                <span className='text-7xl'>{kg}</span>
                <span className='text-3xl'>/mon</span>
            </h1>
            <p className='text-3xl font-bold text-center'>{name}</p>
           <div className='px-10'>
           {
            features.map((fee, index)=><Feature key={index} fee={fee}></Feature>)
           }
           </div>
           </div>
           <button className='text-xl bg-white text-black font-bold w-full rounded-lg'> click</button>
        </div>
    );
 };
 
 Price.propTypes = {
    pric:PropTypes.object.isRequired
 };
 
 export default Price;