import Image from "next/image";
import { useRouter } from "next/router"
import image_test from "@/public/image_test.jpg"

import React from 'react'
import Tag from "@/components/Tag";
import { faChevronDown, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useProduct from "@/hooks/useProduct";
import Group from "@/components/Group";



const Produit = () => {
    const router = useRouter();
    const {produitId} = router.query;
    const {data : produitFetch, isLoading} = useProduct(produitId as string)
    if(!produitFetch || isLoading){
      return (<div className="flex justify-center items-center h-[80vh] text-3xl text-bold">Loading..</div>)
    }
    console.log('voies',produitFetch)

  return (
    <div className="flex flex-col lg:flex-row">
        <aside className="sticky top-0 w-full h-full px-5 lg:w-1/2">
          <Image 
            className="w-full h-1/2 px-5 object-contains"
            src={produitFetch.image ? produitFetch.image : image_test}
            alt="image_product"
            width='100'
            height='100'
          />
        </aside>

        <div className="w-full h-full px-5 lg:w-1/2 z-50 bg-white">
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

          <div className="bg-white min-h-sceen mb-20">
            <div className="grid divide-y divide-neutral-200 mt-8">
              <Group label='Description' content={produitFetch.description}/>
              <Group label='Propriété' content={produitFetch.property}/>
              <Group label='Conseils d’utilisation' content={produitFetch.use}/>
              <Group label='Composition' content={produitFetch.composition}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Produit