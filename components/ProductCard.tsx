import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image_test from "../public/image_test.png" 

const ProductCard = () => {
  return (

        <div className="max-w-md sm:max-w-xs bg-white border border-green-600 rounded-lg shadow">
        
            <Image 
                className="rounded-t-lg" 
                src={image_test}
                alt="image_product"
            />
    
            <div className="p-5">
                <h3 className="mb-2 text-xl font-bold tracking-tight">Noteworthy technology acquisitions 2021</h3>
                <p className="mb-3 font-normal">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <Link 
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                href="../produit/test"
                >
                    En savoir plus
                    <FontAwesomeIcon className='mx-2' icon={faArrowRight}/>
                </Link>
            </div>
        </div>
  )
}

export default ProductCard