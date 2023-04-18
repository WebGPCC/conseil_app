import Image from "next/image";
import { useRouter } from "next/router"
import image_test from "@/public/image_test.jpg"

import React from 'react'
import Tag from "@/components/Tag";
import { faChevronDown, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useProduct from "@/hooks/useProduct";



const Produit = () => {
    const router = useRouter();
    const {produitId} = router.query;
    const {data : produitFetch, isLoading} = useProduct(produitId as string)
    if(!produitFetch || isLoading){
      return (<div className="flex justify-center items-center h-[80vh] text-3xl text-bold">Loading..</div>)
    }
    console.log('voies',produitFetch)

  return (
    <div className="relative flex flex-col sm:flex-row pt-10">
        <aside className="sm:sticky sm:top-0 sm:w-1/2 w-full h-full">
          <Image 
            className="object-cover w-full h-full px-10"
            src={produitFetch.image ? produitFetch.image : image_test}
            alt="image_product"
            width='100'
            height='100'
          />  
        </aside>

        <main className=" w-full h-full px-5 sm:w-1/2 ">
          <header className="sticky top-0 bg-white rounded-b drop-shadow p-5 z-10">
            <h2 className="text-xl">{produitFetch.brand}</h2>
            <h1 className="font-bold text-4xl">
                {produitFetch.name}
            </h1>
            <span className="text-gray-400 text-xl">Ref: {produitFetch.reference}</span>
            <div className="flex flex-warp gap-2 pt-5">
              {
                produitFetch.voies.map((tag:string)=>(
                  <Tag key={tag} value={tag}/>
                ))
              }
            </div>
          </header>

          <div className="bg-white min-h-sceen ">
            <div className="grid divide-y divide-neutral-200 mt-8">
              <div className="py-5 ">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg">
                      <FontAwesomeIcon className="mr-2" icon={faLeaf}/>Description</span>
                      <span className="transition group-open:rotate-180">
                      <FontAwesomeIcon icon={faChevronDown} className='h-4' />  
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
                    <FontAwesomeIcon icon={faChevronDown} className='h-4' />  
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
                      <FontAwesomeIcon icon={faChevronDown} className='h-4' />  
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
                  <FontAwesomeIcon icon={faChevronDown} className='h-4' />  
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