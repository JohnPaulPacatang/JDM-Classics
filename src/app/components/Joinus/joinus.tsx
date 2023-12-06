
const Join = () => {
    return (
        <div className="bg-joinus my-32">
            <div className='mx-auto max-w-2xl xl:max-w-7xl sm:py-4 xl:px-8'>

                <div className="text-center">
                    <h3 className="text-blue text-lg font-normal tracking-widest">JDM Enthusiasts, Unite!</h3>
                    <h2 className="text-4xl sm:text-6xl font-bold my-6 mx-8 leading-10">Turbocharge Your Business<br />for Unrivaled Success in the JDM Way.</h2>
                    <p className="text-lightblack text-base mx-10 font-normal">Ignite your entrepreneurial spirit with the power of JDM. Explore the rich history of innovation, from the resilient Golems to the relentless Zombies and the fascinating world of Raimi. Join us on this journey!</p>
                </div>

                <div className="mx-auto max-w-4xl pt-5">
                    <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
                        <div>
                            <input type="name" className="my-4 py-4 sm:pl-6 xl:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none focus:text-black" placeholder="Your name" autoComplete="off" />
                        </div>
                        <div>
                            <input type="email" className="my-4 py-4 sm:p-6 xl:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none focus:text-black" placeholder="Your email" autoComplete="off" />
                        </div>
                        <div className="sm:mr-3">
                            <button type="submit" className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue">
                                Join!
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Join;
