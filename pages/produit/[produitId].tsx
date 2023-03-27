import { useRouter } from "next/router"

import React from 'react'

const Produit = () => {
    const router = useRouter();
    const {produitId} = router.query;
  return (
    <div>
        <h1>
            Produit {produitId}
        </h1>
    </div>
  )
}

export default Produit