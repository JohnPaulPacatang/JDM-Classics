import Image from "next/image";

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto px-4 py-24 my-32 xl:px-10 bg-lightgrey relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>WELCOME</h3>
                <h4 className='text-center text-4xl xl:text-65xl font-bold'>Know more about us.</h4>
                <div className="mx-auto max-w-7xl px-4 py-4 my-4 xl:px-10 text-2xl text-center leading-10">Welcome to JDM Classics! <br />Immerse yourself in the thrilling world of Japanese Domestic Market (JDM) cars through our interactive platform. Explore a curated collection of stunning images, detailed specifications, and fascinating details about iconic JDM vehicles. Whether you&apos;re a seasoned enthusiast or just beginning your JDM journey, our site offers a fun and informative experience that celebrates the unique charm of these automotive legends. Discover, share, and indulge in the excitement of JDM culture with us!

                </div>
            </div>
        </div>

    )
}

export default Aboutus;