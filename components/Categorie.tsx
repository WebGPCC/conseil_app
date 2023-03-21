import Image from 'next/image'
import React from 'react'
import cat_taux from '../public/cat_taux.png'

const Categorie = () => {
  return (
    <a href='./categories/Maux_de_gorge'>
        <Image
            src={cat_taux}
            alt='Maux de gorge'
        />
        <h2 className='flex justify-center pt-2 font-bold'>Maux de gorge</h2>
    </a>
  )
}

export default Categorie