import Image from "next/image";

const Engines = () => {
    return (

        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32" id="engines-section">
            <h2 className="text-4xl sm:text-6xl font-bold text-center">Explore Our Collection <br /> of JDM Engines</h2>
            <h3 className="text-2xl font-medium text-center pt-10 opacity-50">Discover a curated selection of high-performance JDM engines that embody precision and power.</h3>

            <div className="grid justify-items-center gap-2 py-16 sm:grid-cols-2 md:grid-cols-3">

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/RB26.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Nissan RB26DETT</h2>
                        <p className="p-1 px-4 text-2xl  text-center font-normal">Specifications: Inline-6, Twin-turbocharged, 2.6L</p>
                        <p className="p-1 px-4 text-center  text-lg text-gray-900">Launch Date: 1989</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Nissan Skyline GT-R (R32, R33, R34)</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/2JZ.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Toyota 2JZ-GTE</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: Inline-6, Twin-turbocharged, 3.0L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 1991</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Toyota Supra (JZA80), Lexus GS 300</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/Honda B16.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Honda B16A</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: Inline-4, VTEC, 1.6L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 1989</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Honda Civic (EF, EG), CR-X</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/4G63.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Mitsubishi 4G63</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: Inline-4, Turbocharged, 2.0L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 1981</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Mitsubishi Lancer Evolution series</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/EJ20.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Subaru EJ20</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: Flat-4, Turbocharged, 2.0L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 1989</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Subaru Impreza WRX</p>
                </div>
                
                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/Mazda 13B REW.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Mazda 13B-REW</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: Rotary, Twin-turbocharged, 1.3L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 1991</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Mazda RX-7 (FD)</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/SR20.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Nissan SR20DET</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: Inline-4, Turbocharged, 2.0L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 1989</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Nissan Silvia, 180SX</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/Toyota 4A-GE.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Toyota 4A-GE</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: Inline-4, DOHC, 1.6L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 1983</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Toyota AE86, MR2</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/Honda K20A.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Honda K20A</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: Inline-4, i-VTEC, 2.0L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 2001</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Honda Civic Type R (EP3), Integra Type R (DC5)</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/Mitsubishi 6A13TT.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Mitsubishi 6A13TT</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: V6, Twin-turbocharged, 2.5L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 1992</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Mitsubishi 3000GT VR-4, Galant VR-4</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/Subaru EJ25.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Subaru EJ25</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: Flat-4, 2.5L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 1995</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Subaru Impreza WRX STI</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/Mazda 20B-REW.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Mazda 20B-REW</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: Rotary, 3-Rotor, Twin-turbocharged, 2.0L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 1991</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Mazda Cosmo JC</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/VG30DETT.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Nissan VG30DETT</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: V6, Twin-turbocharged, 3.0L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 1987</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Nissan 300ZX Twin Turbo</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/Toyota 1JZ-GTE.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Toyota 1JZ-GTE</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: Inline-6, Turbocharged, 2.5L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 1990</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Toyota Chaser, Soarer, Mark II</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/Honda F20C.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Honda F20C</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: Inline-4, VTEC, 2.0L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 1999</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Honda S2000</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/Mitsubishi 4B11T.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Mitsubishi 4B11T</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: Inline-4, Turbocharged, 2.0L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 2007</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Mitsubishi Lancer Evolution X</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/Subaru FA20.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Subaru FA20</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: Flat-4, 2.0L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 2012</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Subaru BRZ, Toyota 86</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/Mazda 26B.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Mazda 26B</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: 4-Rotor, Naturally Aspirated, 2.6L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 1991</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Mazda 787B (Le Mans Winner)</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/Nissan VQ35DE.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Nissan VQ35DE</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: V6, 3.5L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 2000</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Nissan 350Z, Infiniti G35</p>
                </div>

                <div className="flex flex-col rounded-md p-4 lg:p-2">
                    <Image src="/images/engines/Toyota 3S-GTE.jpg" height={300} width={700} alt="engines" className="engine-size mb-3 object-cover rounded-xl shadow-xl" />
                        <h2 className="p-1 px-4 text-2xl  text-center font-bold">Toyota 3S-GTE</h2>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Specifications: Inline-4, Turbocharged, 2.0L</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Launch Date: 1986</p>
                        <p className="p-1 px-4 text-center text-lg text-gray-900">Cars: Toyota Celica GT-Four, MR2 Turbo</p>
                </div>

            </div>
        </div>
       
    )
}

export default Engines;



