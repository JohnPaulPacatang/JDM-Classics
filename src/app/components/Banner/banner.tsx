"use client"
import Image from "next/image";
import React, { MouseEventHandler } from 'react';

const Banner = () => {

    const getStarted: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (event) => {
        event.preventDefault();
    
        const aboutUsSection = document.getElementById('aboutus-section');
    
        if (aboutUsSection) {
            aboutUsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    
    return (
     
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 xl:px-8'>
            <div className='grid grid-cols-1 xl:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center xl:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black cursor-default'>JDM Classics</button>
                    </div>
                    <div className="py-3 text-center xl:text-start">
                        <h1 className='text-6xl xl:text-80xl font-bold text-darkpurple'>
                            Japan&apos;s<br /> Finest <br /> Cars.
                        </h1>
                    </div>
                    <div className='my-7 text-center xl:text-start'>
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue' onClick={getStarted}>
                            Get Started
                        </button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='xl:-m-24auto mx-auto xl:pt-20 hidden md:block'>
                    <Image src="/images/banner/supra1.jpg" alt="hero-image" width={750} height={600} />
                </div>

            </div>
        </div>
    )
}

export default Banner;
