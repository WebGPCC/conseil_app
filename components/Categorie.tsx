import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cat_taux from '../public/cat_taux.png'

const Categorie = () => {
  return (
    <Link href='./categorie/Maux de gorge'>
        <Image
            src={cat_taux}
            alt='Image Maux de gorge'
        />
        <h2 className='flex justify-center pt-2 font-bold'>Maux de gorge</h2>
    </Link>
  )
}

export default Categorie