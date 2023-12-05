"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    brands: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        brands: 'Car Brand',
        name: 'Toyota',
        imgSrc: '/images/brands/toyota.png',
    },
    {
        brands: 'Car Brand',
        name: 'Honda',
        imgSrc: '/images/brands/honda.png',
    },
    {
        brands: 'Car Brand',
        name: 'Mazda',
        imgSrc: '/images/brands/mazda.png',
    },
    {
        brands: 'Car Brand',
        name: 'Nissan',
        imgSrc: '/images/brands/nissan.png',
    },
    {
        brands: 'Car Brand',
        name: 'Subaru',
        imgSrc: '/images/brands/subaru.png',
    },
    {
        brands: 'Car Brand',
        name: 'Mitsubishi',
        imgSrc: '/images/brands/mitsubishi.png',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            draggable: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        draggable: true,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        draggable: true,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div id="brands-section" className="bg-cars py-32">
                <div className='mx-auto max-w-2xl xl:max-w-7xl sm:py-4 xl:px-8 '>
                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">Embark on a Journey Through the</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 xl:mr-48 my-2">Dynamic Universe of Car Brands</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 xl:-mr-32 my-2">Tailored for Exhilarating JDM Modifications</h3>
                    </div>
                </div>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 py-10 my-10 text-center shadow-xl rounded-3xl cursor-pointer'>
                                <div className='relative'>
                                    <Image src={items.imgSrc} alt="brands" width={300} height={500} className="inline-block m-auto object-contain bg-lightgrey w-70 h-60 p-3 rounded-xl" />
                                </div>
                                <h4 className='text-4xl font-bold pt-14'>{items.name}</h4>
                                <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.brands}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>

        );
    }
}
