import Image from "next/image";

const Beliefs = () => {
    return (
        <div className='mx-auto max-w-2xl md:max-w-7xl sm:py-10 lg:px-10 rounded-3xl'>
            <h2 className="text-4xl sm:text-65xl font-bold text-center">SMOKEY&apos;s Builds:</h2>
            <div className='grid grid-cols-1 lg:grid-cols-1 my-16 gap-5 mx-4'>

                {/* COLUMN-1 */}

                <div className="bg-navyblue pt-12 px-6 sm:px-10 pb-10 rounded-3xl">
                    <h2 className="text-4xl font-bold text-blue tracking-widest mb-5 text-center sm:text-start">The V12 Supra</h2>
                    <h3 className="text-xl sm:text-50xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Smokey designed the Top Secret Supra, featuring a 5.0-liter V12 engine, a pair of turbos, and custom-forged internals. The car, powered by a 276 hp Century V12 engine, produced 1,003 horsepower and 745 pounds of torque. Tested in Italy, it reached 222.6 mph and 7,300 rpm, outperforming a McLaren P1 GTR.</h3>
                    <p className="text-offwhite text-lg pt-2 mb-5 text-center sm:text-start">Smokey attempted to break the 200 mph barrier on a public highway in Britain with his Top Secret Supra (with inline-6 engine on). Despite the car&apos;s temperament and the challenging conditions, Nagata managed to hit 197 mph on the A1 stretch of tarmac. His achievement boosted the reputation of his Top Secret brand. Despite being apprehended and imprisoned, Nagata&apos;s story gained attention in the underground racing scene. The UK top-speed run was documented on high-definition VHS, and it was only a few years later that Top Secret and Nagata transformed the Supra into a V12-powered wide-body monster for the 2007 Tokyo Auto Salon. This event sparked a change in the Japanese performance-car market, as Nissan GT-R was still in development and Toyota had no plans for a Supra replacement.</p>
                    <div className='mx-auto xl:pt-8'>
                        <Image src="/images/smokeyCars/v12 supra.jpeg" alt="hero-image" width={750} height={500} className="rounded-xl cars-build"/>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className="bg-turquoise pt-12 px-6 sm:px-10 pb-10 rounded-3xl">
                    <h2 className="text-4xl font-bold text-blue tracking-widest mb-5 text-center sm:text-start">Top Secret Nissan GT-R</h2>
                    <h3 className="text-xl sm:text-50xl font-bold text-black leading-snug mb-5 text-center sm:text-start">The Top Secret Nissan GT-R, a covert masterpiece meticulously crafted by Smokey for his exclusive enjoyment, represents the pinnacle of automotive engineering. Tailored to exacting specifications, this high-performance marvel underwent rigorous testing and received bespoke enhancements courtesy of acclaimed aftermarket manufacturers HKS and GReddy. </h3>
                    <p className="text-black opacity-90 text-lg pt-2 mb-5 text-center sm:text-start">With an unwavering focus on achieving unparalleled top speeds, both the transmission and chassis underwent substantial modifications to optimize performance. Wrapped in a sleek carbon fiber exterior, the GT-R boasts a formidable aero package, featuring a VR38 RX 4L GReddy Engine Stroker Kit, HKS camshaft, valve springs, head gasket, TD06-25G turbo set, and other proprietary upgrades. Each component synergizes to elevate the car&apos;s capabilities, ensuring an extraordinary driving experience. This Smokey&apos;s masterpiece stands as a testament to the fusion of precision engineering and automotive artistry, epitomizing the relentless pursuit of excellence in the realm of high-performance vehicles.</p>
                    <div className='mx-auto xl:pt-8'>
                        <Image src="/images/smokeyCars/top secret r35.jpg" alt="hero-image" width={750} height={500} className="rounded-xl cars-build"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Beliefs;
