import React from 'react';

export default function PriceCard({text, price}) {
    return (
        <div className='w-full bg-gray-50 p-8 mx-3 rounded-2xl text-center'>
            <p>{text}</p>
            <p className='font-bold text-brand text-xl md:text-xl'>{price}</p>
        </div>
    );
}