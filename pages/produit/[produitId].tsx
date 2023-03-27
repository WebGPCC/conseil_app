import Image from "next/image";
import { useRouter } from "next/router"
import image_test from "@/public/image_test.png" 

import React from 'react'
import Tag from "@/components/Tag";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Produit = () => {
    const router = useRouter();
    const {produitId} = router.query;
  return (
    <div className="flex flex-col sm:flex-row">
        <aside className="relative sm:w-1/2 w-full ">
          <span className="font-bold text-gray-400 text-xl absolute bottom-2 right-2 ">Ref : 11000022 </span>
          <Image 
            className="sticky top-0 w-full object-fill"
            src={image_test}
            alt="image_product"
          />  
        </aside>
        <main className=" w-full px-5 sm:w-1/2">
          <h2 className="text-xl">Marque</h2>
          <h1 className="font-bold text-4xl">
              {produitId}
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
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                      </svg>  
                    </span>
                  </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  SAAS platform is a cloud-based software service that allows users to access
                and use a variety of tools and functionality.
                </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="text-lg"><FontAwesomeIcon className="mr-2" icon={faLeaf}/>Propriétés et bienfaits</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                We offers a variety of billing options, including monthly and annual subscription plans,
                as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit
                card or other secure online payment method.
                </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg"><FontAwesomeIcon className="mr-2" icon={faLeaf}/>Conseils d’utilisation</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We offers a 30-day money-back guarantee for most of its subscription plans. If you are not
                  satisfied with your subscription within the first 30 days, you can request a full refund. Refunds
                  for subscriptions that have been active for longer than 30 days may be considered on a case-by-case
                  basis.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg"><FontAwesomeIcon className="mr-2" icon={faLeaf}/>Composition</span>
                <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                </svg>
                    </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                To cancel your We subscription, you can log in to your account and navigate to the
                subscription management page. From there, you should be able to cancel your subscription and stop
                future billing.
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