import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cat_taux from '../public/cat_taux.png'

const Categorie = () => {
  return (
    <Link href='./categories/Maux de gorge'>
        <Image
            src={cat_taux}
            alt='Maux de gorge'
        />
        <h2 className='flex justify-center pt-2 font-bold'>Maux de gorge</h2>
    </Link>
  )
}

export default Categorie