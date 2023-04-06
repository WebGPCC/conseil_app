import Image from "next/image";
import { useRouter } from "next/router"
import image_test from "@/public/image_test.png" 

import React from 'react'
import Tag from "@/components/Tag";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useProduct from "@/hooks/useProduct";



const Produit = () => {
    const router = useRouter();
    const {produitId} = router.query;
    const {data : produitFetch, isLoading} = useProduct(produitId as string)
    
  if(!produitFetch || isLoading){
    return (<div className="flex justify-center items-center h-[80vh] text-3xl text-bold">Loading..</div>)
  }

  return (
    <div className="flex flex-col sm:flex-row">
        <aside className="relative sm:w-1/2 w-full ">
          <span className="text-gray-400 text-lg absolute bottom-2 right-2 ">ref: {produitFetch.reference}</span>
          <Image 
            className="sticky top-0 w-full object-fill"
            src={image_test}
            alt="image_product"
          />  
        </aside>
        <main className=" w-full px-5 sm:w-1/2">
          <h2 className="text-xl">{produitFetch.brand}</h2>
          <h1 className="font-bold text-4xl">
              {produitFetch.name}
          </h1>

          <div className="flex flex-warp gap-2 mt-5">
            <Tag/>
            <Tag/>
            <Tag/>
          </div>

          <div className="bg-white min-h-sceen">
            <div className="grid divide-y divide-neutral-200 mt-8">
              <div className="py-5 ">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg"><FontAwesomeIcon className="mr-2" icon={faLeaf}/>Description</span>
                      <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                      </svg>  
                    </span>
                  </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  {produitFetch.description}
                </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="text-lg"><FontAwesomeIcon className="mr-2" icon={faLeaf}/>Propriétés et bienfaits</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  {produitFetch.property}
                </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg"><FontAwesomeIcon className="mr-2" icon={faLeaf}/>Conseils d’utilisation</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {produitFetch.use}
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg"><FontAwesomeIcon className="mr-2" icon={faLeaf}/>Composition</span>
                <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                </svg>
                    </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  {produitFetch.composition}
                </p>
                </details>
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default Produit