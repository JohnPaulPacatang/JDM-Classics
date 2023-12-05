import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="relative">

            <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden xl:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 xl:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/dedicated/smokey.jpg" alt="smokey" width={416} height={530} className="bg-profile mx-auto md:mx-0 rounded-xl"/>
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden xl:block" />
                        <h2 className="text-4xl xl:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center xl:text-start">What I look for is total balance of a car, not just horse power.</h2>
                        <p className="font-medium text-lightblack text-xl mt-5 text-center xl:text-start">Smokey Nagata, a renowned figure in the automotive world, founded Top Secret, a Japanese company specializing in high-performance cars and aftermarket parts. Famous for his daring stunts, including the &quot;V12 Supra&quot; modification, Nagata&apos;s legacy reaches beyond Japan.</p>
                        <p className="text-2xl font-semibold mt-12 xl:ml-32 preline text-center xl:text-start">Smokey Nagata, JDM Legends</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
