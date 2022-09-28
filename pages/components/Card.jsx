import React from 'react'
import Image from 'next/image'
const Card = ({ image, title }) => {
    return (
        <div className="text-center hover:shadow-teal-800  shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 transition ease-in-out delay-150 ">
            <Image src={image} alt="" width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white transition ease-in-out delay-150">{title}</h3>
            <p className="dark:text-white transition ease-in-out delay-150">Creating elegant designs suited for your needs.</p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1 dark:text-gray-400 transition ease-in-out delay-150">PhotoShop</p>
            <p className="text-gray-800 py-1 dark:text-gray-400 transition ease-in-out delay-150">Adobe Illustrator</p>
            <p className="text-gray-800 py-1 dark:text-gray-400 transition ease-in-out delay-150">Figma</p>
        </div>
    )
}

export default Card