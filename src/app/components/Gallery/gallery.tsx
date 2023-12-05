"use client"
import * as React from "react";
import { useState } from "react"; 
import Image from "next/image";  

interface Name {
    carName: string;
    imageSrc: string;
    engine: string;
    displacement: string;
    horsePower: string;
    topSpeed: string;
    category: 'toyota' | 'honda' | 'mazda' | 'nissan' | 'subaru' | 'mitsubishi';
}

const names: Name[] = [
    {
        carName: 'Lancer Evolution IX MR (CT9A)',
        imageSrc: '/images/gallery/mitsubishi/Evo-1.jpg',
        engine: '4G63T MIVEC',
        displacement: '2.0L',
        horsePower: '286 HP',
        topSpeed: '255 Km/h / 155 Mph',
        category: 'mitsubishi'
    },
    {
        carName: 'Eclipse GSX',
        imageSrc: '/images/gallery/mitsubishi/Eclipse.jpg',
        engine: '4G63 L4',
        displacement: '2.0L',
        horsePower: '210 HP',
        topSpeed: '226 Km/h / 140 Mph',
        category: 'mitsubishi'
    },
    {
        carName: 'GTO MR (Mk II)',
        imageSrc: '/images/gallery/mitsubishi/GTO.jpg',
        engine: 'V6 (type)',
        displacement: '3.0L',
        horsePower: '276 HP',
        topSpeed: '260 Km/h / 162 Mph',
        category: 'mitsubishi'
    },
    {
        carName: 'FTO GPX',
        imageSrc: '/images/gallery/mitsubishi/FTO.jpg',
        engine: 'Transverse V6',
        displacement: '2.0L',
        horsePower: '194 HP',
        topSpeed: '225 Km/h / 140 Mph',
        category: 'mitsubishi'
    },
    {
        carName: 'Galant VR-4 V6',
        imageSrc: '/images/gallery/mitsubishi/galant.jpg',
        engine: 'V6',
        displacement: '2.5L',
        horsePower: '276 HP',
        topSpeed: '242 Km/h / 150 Mph',
        category: 'mitsubishi'
    },
    {
        carName: 'Lancer Evo III',
        imageSrc: '/images/gallery/mitsubishi/Evo3.jpg',
        engine: '4G63',
        displacement: '2.0L',
        horsePower: '266 HP',
        topSpeed: '244 Km/h / 149 Mph',
        category: 'mitsubishi'
    },
    {
        carName: 'Mazda6',
        imageSrc: '/images/gallery/mazda/m6.jpg',
        engine: 'Inline-4',
        displacement: '2.5L',
        horsePower: '187 HP',
        topSpeed: '210 Km/h / 131 Mph',
        category: 'mazda'
    },
    {
        carName: 'RX-7 FD',
        imageSrc: '/images/gallery/mazda/rx7-1.png',
        engine: '2A rotary engine',
        displacement: '2.0L',
        horsePower: '252 HP',
        topSpeed: '250 Km/h / 155 Mph',
        category: 'mazda'
    },
    {
        carName: 'Veilside FD3S RX7',
        imageSrc: '/images/gallery/mazda/rx7-2.jpg',
        engine: '13B-REW',
        displacement: '2.6L',
        horsePower: '252 HP',
        topSpeed: '250 km/h / 155 Mph',
        category: 'mazda'
    },
    {
        carName: 'RX 8 231 ',
        imageSrc: '/images/gallery/mazda/rx8.jpg',
        engine: 'Renesis Wankel 2',
        displacement: '1.3L',
        horsePower: '228 HP',
        topSpeed: '235 km/h / 146 Mph',
        category: 'mazda'
    },
    {
        carName: 'MX-5 (Miata) 4th gen.',
        imageSrc: '/images/gallery/mazda/miata.jpg',
        engine: 'Skyactiv-G (PE-VPS) DOHC',
        displacement: '2.0L',
        horsePower: '181 HP',
        topSpeed: '215 km/h / 134 Mph',
        category: 'mazda'
    },
    {
        carName: 'RX 7 FC',
        imageSrc: '/images/gallery/mazda/rx7-fc.jpg',
        engine: '12A or 13B',
        displacement: '1.3L',
        horsePower: '179 HP',
        topSpeed: '230 Km/h / 143 Mph',
        category: 'mazda'
    },
    {
        carName: 'Civic Type-R (1999)',
        imageSrc: '/images/gallery/honda/civic-1.jpg',
        engine: 'B16B',
        displacement: '1.5L',
        horsePower: '182 HP',
        topSpeed: '222 Km/h / 138 Mph',
        category: 'honda'
    },
    {
        carName: 'Honda (Acura) Integra Type-R',
        imageSrc: '/images/gallery/honda/integra.jpg',
        engine: 'I4',
        displacement: '1.8L',
        horsePower: '187 HP',
        topSpeed: '233 Km/h / 145 Mph',
        category: 'honda'
    },
    {
        carName: 'S2000',
        imageSrc: '/images/gallery/honda/S2000.png',
        engine: 'AP1 I4',
        displacement: '2.0L',
        horsePower: '237 HP',
        topSpeed: '241 Km/h / 150 Mph',
        category: 'honda'
    },
    {
        carName: 'Honda (Acura) NSX',
        imageSrc: '/images/gallery/honda/nsx.jpg',
        engine: 'C30A V6',
        displacement: '3.0L',
        horsePower: '266 HP',
        topSpeed: 'N/A',
        category: 'honda'
    },
    {
        carName: 'HSV-010 GT500 Super GT',
        imageSrc: '/images/gallery/honda/Super GT.jpg',
        engine: 'Honda HR10EG',
        displacement: '3.4L',
        horsePower: '490 HP',
        topSpeed: '300 Km/h / 186 Mph',
        category: 'honda'
    },
    {
        carName: '2023 Civic Type-R',
        imageSrc: '/images/gallery/honda/type-r.jpg',
        engine: 'I4',
        displacement: '2.0L',
        horsePower: '315 HP',
        topSpeed: '275 Km/h / 171 Mph',
        category: 'honda'
    },
    {
        carName: 'GT-R Nismo R35',
        imageSrc: '/images/gallery/nissan/nismo r35.jpg',
        engine: 'VR38DETT V6',
        displacement: '3.8L',
        horsePower: '592 HP',
        topSpeed: '315 Km/h / 196 Mph',
        category: 'nissan'
    },
    {
        carName: 'Prince Skyline (GT-R 2nd gen)',
        imageSrc: '/images/gallery/nissan/gtr 2ndgen.jpg',
        engine: 'G-7 S20 I6',
        displacement: '2.0L',
        horsePower: '157 HP',
        topSpeed: '199.55 Km/h / 124 Mph',
        category: 'nissan'
    },
    {
        carName: 'Silvia S14 Ks',
        imageSrc: '/images/gallery/nissan/s14.jpg',
        engine: 'SR20DET',
        displacement: '2.0L',
        horsePower: '217 HP',
        topSpeed: '222 Km/h / 138 Mph',
        category: 'nissan'
    },
    {
        carName: '350Z',
        imageSrc: '/images/gallery/nissan/350z.png',
        engine: 'V6',
        displacement: '3.5L',
        horsePower: '313 HP',
        topSpeed: '250 Km/h / 155.34 Mph',
        category: 'nissan'
    },
    {
        carName: 'Skyline GT-R R34 V-Spec',
        imageSrc: '/images/gallery/nissan/gtr r34-1.jpg',
        engine: 'RB26 DETT',
        displacement: '2.6L',
        horsePower: '276 HP',
        topSpeed: '251 Km/h / 156 Mph',
        category: 'nissan'
    },
    {
        carName: 'Silvia S15 Spec R',
        imageSrc: '/images/gallery/nissan/s15-1.jpg',
        engine: 'SR20DET',
        displacement: '2.0L',
        horsePower: '247 HP',
        topSpeed: '244 Km/h / 152 Mph',
        category: 'nissan'
    },
    {
        carName: 'Celica GT-Four',
        imageSrc: '/images/gallery/toyota/celica.jpg',
        engine: 'I4',
        displacement: '2.0L',
        horsePower: '239 HP',
        topSpeed: '246 Km/h / 153 Mph',
        category: 'toyota'
    },
    {
        carName: 'Top Secret Toyota Supra',
        imageSrc: '/images/gallery/toyota/Top secret supra.jpg',
        engine: '1GZ-FE V12',
        displacement: '5.0L',
        horsePower: 'Est. 1,000+ HP ',
        topSpeed: '358.34 Km/h / 222.6 Mph',
        category: 'toyota'
    },
    {
        carName: 'Supra MK4',
        imageSrc: '/images/gallery/toyota/supra mk4-1.jpg',
        engine: '2JZ-GTE',
        displacement: '3.0L',
        horsePower: '326 HP',
        topSpeed: '326 Km/h / 155 Mph',
        category: 'toyota'
    },
    {
        carName: 'AE86 Trueno',
        imageSrc: '/images/gallery/toyota/takumi.jpg',
        engine: '4A-GE',
        displacement: '1.6L',
        horsePower: '124 HP',
        topSpeed: '200 Km/h / 124 Mph',
        category: 'toyota'
    },
    {
        carName: 'Supra MK5',
        imageSrc: '/images/gallery/toyota/supra mk5.jpg',
        engine: 'I6',
        displacement: '3.0L',
        horsePower: '335 HP',
        topSpeed: '262 Km/h / 163 Mph',
        category: 'toyota'
    },
    {
        carName: '2000 GT',
        imageSrc: '/images/gallery/toyota/gt2000.png',
        engine: 'I6',
        displacement: '2.0L',
        horsePower: '150 HP',
        topSpeed: '206 Km/h / 128 Mph',
        category: 'toyota'
    },
    {
        carName: 'Impreza III WRX STI Hatchback Sport Plus',
        imageSrc: '/images/gallery/subaru/wrx-1.jpg',
        engine: 'EJ20',
        displacement: '2.5L',
        horsePower: '297 HP',
        topSpeed: '250 Km/h / 155 Mph',
        category: 'subaru'
    },
    {
        carName: 'Impreza WRX STI (2005)',
        imageSrc: '/images/gallery/subaru/wrx-2.jpg',
        engine: 'EJ20',
        displacement: '2.0L',
        horsePower: '261 HP',
        topSpeed: '244 Km/h / 152 Mph',
        category: 'subaru'
    },
    {
        carName: '1998 Impreza 22B STi',
        imageSrc: '/images/gallery/subaru/impreza.jpg',
        engine: 'EJ22',
        displacement: '2.2L',
        horsePower: '276 HP',
        topSpeed: '252 Km/h / 157 Mph',
        category: 'subaru'
    },
    {
        carName: '1997 SVX',
        imageSrc: '/images/gallery/subaru/svx.jpg',
        engine: 'H6',
        displacement: '3.3L',
        horsePower: '230 HP',
        topSpeed: '241 Km/h / 150 Mph',
        category: 'subaru'
    },
    {
        carName: '2023 BRZ',
        imageSrc: '/images/gallery/subaru/brz.jpg',
        engine: 'H$',
        displacement: '2.4L',
        horsePower: '237 HP',
        topSpeed: '216 Km/h / 134 Mph',
        category: 'subaru'
    },
    {
        carName: '2005 Forester STI',
        imageSrc: '/images/gallery/subaru/forester.png',
        engine: 'EJ25',
        displacement: '2.5L',
        horsePower: '261 HP',
        topSpeed: '225.3 Km/h / 140 Mph',
        category: 'subaru'
    },
];

const CarsList = () => {

    const [selectedButton, setSelectedButton] = useState<'toyota' | 'honda' | 'mazda' | 'nissan' | 'subaru' | 'mitsubishi' | null>('honda');

    const toyota = names.filter((name) => name.category === 'toyota');
    const honda = names.filter((name) => name.category === 'honda');
    const mazda = names.filter((name) => name.category === 'mazda');
    const nissan = names.filter((name) => name.category === 'nissan');
    const subaru = names.filter((name) => name.category === 'subaru');
    const mitsubishi = names.filter((name) => name.category === 'mitsubishi');

    let selectedNames: Name[] = [];

    if (selectedButton === 'toyota') {
        selectedNames = toyota;
    } else if (selectedButton === 'honda') {
        selectedNames = honda;
    } else if (selectedButton === 'mazda') {
        selectedNames = mazda;
    } else if (selectedButton === 'nissan') {
        selectedNames = nissan
    } else if (selectedButton === 'subaru') {
        selectedNames = subaru;
    } else if (selectedButton === 'mitsubishi') {
        selectedNames = mitsubishi
    }


    const nameElements = selectedNames.map((name, index) => (

        <div key={index}>
            <div className="text-lg sm:text-sm py-5 xl:py-0">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out">
                    <Image src={name.imageSrc} alt={name.imageSrc} className="cars-size object-cover object-center"/>
                </div>

                <div className="bg-lightgrey p-4 mb-4 ">
                    <div className='flex justify-between'>
                        <div className="mt-4 ml-2 text-xl font-semibold ">
                            Car Name: {name.carName}
                        </div>
                    </div>
                    <p aria-hidden="true" className="mt-2 ml-2 block text-lg font-normal text-gray-900">
                    Engine: {name.engine}
                    </p>
                    <p aria-hidden="true" className="mt-2 ml-2 block text-lg font-normal text-gray-900">
                    Displacement: {name.displacement}
                    </p>
                    <p aria-hidden="true" className="mt-2 ml-2 block text-lg font-normal text-gray-900">
                    Horsepower: {name.horsePower}
                    </p>
                    <p aria-hidden="true" className="mt-2 mb-2 ml-2 block text-lg font-normal text-gray-900">
                        Top Speed: {name.topSpeed}
                    </p>
                </div>

            </div>
        </div>
    ));


    return (
        <div  id="cars-section">
            <div className="bg-decals md:bg-decalshidden mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 md:max-w-7xl md:px-8 ">

                <div className='sm:flex justify-between items-center pb-5'>
                    <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-gray-900 my-4">Popular Cars</h2>
                </div>

                <div className='flex nowhitespace space-x-5 rounded-xl p-1 overflow-x-auto'>

                    {/* FOR DESKTOP VIEW */}
                    <button onClick={() => setSelectedButton('honda')} className={"bg-white " + (selectedButton === 'honda' ? 'text-black border-b-2 border-orange' : 'text-black') + " pb-2 text-lg hidden sm:block hover:text-blue"}>Honda</button>
                    <button onClick={() => setSelectedButton('toyota')} className={"bg-white " + (selectedButton === 'toyota' ? 'text-black border-b-2 border-orange' : 'text-black') + " pb-2 text-lg hidden sm:block hover:text-blue"}>Toyota</button>
                    <button onClick={() => setSelectedButton('mazda')} className={"bg-white " + (selectedButton === 'mazda' ? 'text-black border-b-2 border-orange' : 'text-black') + " pb-2 text-lg hidden sm:block hover:text-blue"}>Mazda</button>
                    <button onClick={() => setSelectedButton('nissan')} className={"bg-white " + (selectedButton === 'nissan' ? 'text-black border-b-2 border-orange' : 'text-black') + " pb-2 text-lg hidden sm:block hover:text-blue"}>Nissan</button>
                    <button onClick={() => setSelectedButton('subaru')} className={"bg-white " + (selectedButton === 'subaru' ? 'text-black border-b-2 border-orange' : 'text-black') + " pb-2 text-lg hidden sm:block hover:text-blue"}>Subaru</button>
                    <button onClick={() => setSelectedButton('mitsubishi')} className={"bg-white " + (selectedButton === 'mitsubishi' ? 'text-black border-b-2 border-orange' : 'text-black') + " pb-2 text-lg hidden sm:block hover:text-blue"}>Mitsubishi</button>

                    {/* FOR MOBILE VIEW */}
               
                    <button onClick={() => setSelectedButton('honda')} className={"bg-white " + (selectedButton === 'honda' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"}>Honda</button>
                    <button onClick={() => setSelectedButton('toyota')} className={"bg-white " + (selectedButton === 'toyota' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"}>Toyota</button>
                    <button onClick={() => setSelectedButton('mazda')} className={"bg-white " + (selectedButton === 'mazda' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"}>Mazda</button>
                    <button onClick={() => setSelectedButton('nissan')} className={"bg-white " + (selectedButton === 'nissan' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"}>Nissan</button>
                    <button onClick={() => setSelectedButton('subaru')} className={"bg-white " + (selectedButton === 'subaru' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"}>Subaru</button>
                    <button onClick={() => setSelectedButton('mitsubishi')} className={"bg-white " + (selectedButton === 'mitsubishi' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"}>Mitsubishi</button>
                   
                </div>

                <div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-12">
                            <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
                                {nameElements.length > 0 ? (
                                    nameElements
                                ) : (
                                    <p>No data to show</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CarsList;




