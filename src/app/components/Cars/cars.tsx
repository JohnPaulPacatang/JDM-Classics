import Image from "next/image";

const Cars = () => {
    return (
        <div className="mx-auto max-w-2xl  pb-16 px-4 sm:px-6 xl:max-w-7xl xl:px-8">
            <div className=" mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">

                <div className="mx-auto imageContainer">
                    <Image src="/images/cars/car1.png" width={306} height={306} alt="carOne" className="rounded-xl"/>
                </div>

                <div className="mx-auto imageContainer">
                    <Image src="/images/cars/car2.png" width={306} height={306} alt="carTwo" className="rounded-xl"/>
                </div>

                <div className="mx-auto imageContainer">
                    <Image src="/images/cars/car3.png" width={306} height={306} alt="carThree" className="rounded-xl"/>
                </div>

                <div className="mx-auto imageContainer">
                    <Image src="/images/cars/car4.png" width={306} height={306} alt="carFour" className="rounded-xl"/>
                </div>

            </div>
        </div>
    )
}

export default Cars
