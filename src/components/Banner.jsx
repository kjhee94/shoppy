import React from 'react';

export default function Banner() {
    return (
        <section className='h-96 bg-yellow-900 relative'>
            <div className='w-full h-full bg-cover bg-center bg-banner opacity-80'></div>
            <div className='absolute w-full bottom-6 left-10 text-gray-50 drop-shadow-2xl'>
                <h2 className='text-4xl'>Banner</h2>
            </div>
        </section>
    );
}

