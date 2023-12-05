import Image from "next/image";

const Tuning = () => {
    return (
        <div id="tuning-section" className='mx-auto py-24 bg-lightgrey xl:px-24 my-16 rounded-xl'>
             <h2 className="text-4xl sm:text-65xl font-bold text-center">JDM Tuning Shops</h2>
             <h3 className="text-2xl font-medium text-center pt-10 opacity-50">Explore a world of automotive craftsmanship at our featured JDM tuning shops, where passion meets performance.</h3>
                <div className="flex justify-center items-center flex-wrap gap-10 relative p-10">
                    <Image src="/images/tuning/GReddy.png" alt="tuning" width={389} height={262} className="tuning-logo object-contain px-10 bg-darkgrey rounded-xl shadow-xl"/>
                    <Image src="/images/tuning/HKS-Logo.png" alt="tuning"  width={389} height={262} className="tuning-logo object-contain px-10 bg-darkgrey rounded-xl shadow-xl"/>
                    <Image src="/images/tuning/JUN.png" alt="tuning" width={389} height={262} className="tuning-logo object-contain px-10 bg-darkgrey rounded-xl shadow-xl"/>
                    <Image src="/images/tuning/Mugen.png" alt="tuning" width={389} height={262} className="tuning-logo object-contain px-10 bg-darkgrey rounded-xl shadow-xl"/>
                    <Image src="/images/tuning/Nismo.png" alt="tuning" width={389} height={262}  className="tuning-logo object-contain px-10 bg-darkgrey rounded-xl shadow-xl"/>
                    <Image src="/images/tuning/Spoon.png" alt="tuning" width={389} height={262} className="tuning-logo object-contain px-10 bg-darkgrey rounded-xl shadow-xl"/>
                    <Image src="/images/tuning/Top Secret.png" alt="tuning" width={389} height={262} className="tuning-logo object-contain px-10 bg-darkgrey rounded-xl shadow-xl"/>
                </div>
        </div>
    )
}

export default Tuning;