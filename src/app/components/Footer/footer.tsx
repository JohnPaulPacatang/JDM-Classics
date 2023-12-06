import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Thanks to:",
        link: ['Carporn Racing', 'Yokohama Tires', 'Eagle Glass and Aluminum', 'Brembo', 'Cusco Japan', 'Borla'],
    },
    {
        id: 2,
        section: "Also:",
        link: ['Brembo', 'Cusco Japan', 'Borla'],
    },
    {
        id: 3,
        section: "Special thanks to:",
        link: ['Angie Mead King', 'Akira Naka', 'Ramon Bautista', 'Yuthana Kaewdang (Tito Mets)']
    },
    {
        id: 4,
        section: "Others",
        link: ['Veilside', 'Top Secret Co., Ltd.', 'Liberty Walk', 'RWB / RAUH-Welt BEGRIFF' ]
    }
]

const footer = () => {
    
    return (
        <div className="bg-black -mt-40" id="first-section">
            <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 md:max-w-7xl md:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 md:grid-cols-12 md:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4 '>
                        <h3 className='text-white text-4xl font-semibold leading-9 mb-4 md:mb-10'> JDM Classics</h3>
                        <div className='flex gap-1'>
                            <Image src={'/images/footer/shigure-ui-dance.gif'} alt="facebook" width={300} height={200} className="dance-gif"/>
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2">
                            <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <p className="text-white text-lg font-normal mb-6 space-links">{link}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>

            {/* All Rights Reserved */}

            <div className="mx-auto max-w-2xl md:max-w-7xl">
                <div className="pt-5 pb-5 px-4 sm:px-6 md:px-4 border-solid border-t border-footer">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 md:gap-x-8">
                        <div>
                            <h3 className='text-center md:text-start text-offwhite text-lg'>@2023 - All Rights Reserved by JDM Classics</h3>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Link href="https://www.linkedin.com/in/prime-john-clara-9a2963289/" target="blank">
                                <h3 className="text-offwhite pr-6">Prime John Clara</h3>
                            </Link>
                            <Link href="https://www.linkedin.com/in/john-paul-pacatang-337993289/" target="blank">
                                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">John Paul Pacatang</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default footer;
