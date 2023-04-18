import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useRouter } from "next/router"
import React, { useCallback } from 'react'
import image_test from "../public/image_test.jpg" 

interface PropsProductCard{
    data : Record<string,any>
}

const ProductCard:React.FC<PropsProductCard> = ({data}) => {
    const router = useRouter()

    const goToProduct = useCallback((event:any) => {
        event.stopPropagation()
        router.push(`/produit/${data.id}`)
      },
      [router, data.id],
    )

  return (
    <div className="flex flex-col max-w-sm w-full sm:max-w-xs bg-white border border-green-600 rounded-lg drop-shadow-lg">
        <div className='flex justify-center'>
            <Image 
                className="min-h-[200px] min-w-[200px] object-scale-down" 
                src={data.image ? data.image : image_test }
                alt="image_product"
                width='100'
                height='100'
            />
        </div>

        <div className="p-5 flex flex-col grow">
            <h3 className="pb-2 text-xl font-bold tracking-tight">{data.name}</h3>
            <p className="
                pb-3
                grow
                font-normal 
                truncate ..."
            >
                {data.description}
            </p>
            <div
                onClick={goToProduct}                    
                className="
                    w-fit 
                    inline-flex 
                    items-center 
                    justify-between 
                    p-2 
                    text-sm 
                    font-medium 
                    text-center 
                    text-white 
                    bg-green-700 
                    rounded-lg 
                    hover:bg-green-800 
                    focus:ring-4 
                    focus:outline-none 
                    focus:ring-green-300 
                    dark:bg-green-600 
                    dark:hover:bg-green-700 
                    dark:focus:ring-green-800
                    cursor-pointer
                "
            >
                <span className='pr-2'>
                    Voir plus
                </span>
                <FontAwesomeIcon className='mx-2' icon={faArrowRight}/>
            </div>
        </div>
    </div>
  )
}

export default ProductCard