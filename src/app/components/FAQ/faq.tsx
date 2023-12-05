"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
    return (
        <div className='mx-auto py-24 xl:px-8 bg-lightgrey my-16'>
            <h3 className='text-xl font-normal text-blue text-center mb-6'>JDM</h3>
            <h2 className='text-4xl xl:text-6xl font-semibold text-center text-black'>Car Facts</h2>
            <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5 shadow-md">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>&quot;Safety at the Speed of Supra: Toyota&apos;s Milestone Airbag Introduction&quot;</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="text-md px-4 pt-4 pb-2 text-black font-normal opacity-80">
                                The Toyota Supra Mk4 marked a pivotal moment in automotive safety by becoming the first Toyota model to feature a passenger airbag. This innovation not only showcased Toyota&apos;s commitment to passenger safety but also set a precedent for future advancements in automotive safety technology.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto  w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5 shadow-md">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>&quot;Unleashing Variance: Decoding the R34 GT-R&apos;s RB26 DETT Mystery&quot;</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black font-normal opacity-80">
                                Contrary to popular belief, not all versions of the R34 GT-R were equipped with the iconic RB26 DETT engine. This intriguing fact adds a layer of complexity to the R34&apos;s legacy, highlighting the diverse range of configurations available and challenging the stereotype associated with this legendary Nissan model.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 shadow-md">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>&quot;Revolution and Risks: The RX7&apos;s 13B-REW and the Battle with Apex Seal Failures&quot;</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-black font-normal opacity-80">
                                The Mazda RX7, celebrated for its rotary engine (13B-REW), faces a notorious reputation due to issues with Apex Seal Failures. This distinctive engine design, while offering unique advantages, also brought challenges, making the RX7 a symbol of the delicate balance between innovation and reliability in the world of high-performance cars.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

            </div>
        </div>
    )
}

export default FAQ;