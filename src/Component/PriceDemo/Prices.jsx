import React, { useEffect, useState } from 'react';
import Price from './Price';

const Prices = () => {
    const [price, setprice] = useState([])
    useEffect(()=>{
        fetch("Price.json")
        .then(res=>res.json())
        .then(data=>setprice(data))
    },[])
    return (
        <div>
            <p>Price {price.length}</p>
            <p className='text-3xl text-center font-bold '>Best Price in the town</p>
           <div className='grid md:grid-cols-3 gap-4'>
           {
                price.map((pric, index)=><Price key={index} pric={pric}></Price>)
            }
           </div>
        </div>
    );
};

export default Prices;