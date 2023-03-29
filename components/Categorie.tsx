import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import cat_taux from '../public/cat_taux.png'

interface CategorieProps {
  data: Record<string,any>
}

const Categorie: React.FC<CategorieProps> = ({data}) => {
  const router = useRouter()

  const goToSymptome = useCallback(
    (event:any) => {
      event.stopPropagation()
      router.push(`/categorie/${data.id}`)
    },
    [router, data.id],
  )
  
  return (
    <div className='cursor-pointer' onClick={goToSymptome}>
        <Image
            src={cat_taux}
            alt='Image Maux de gorge'
        />
        <h2 className='flex justify-center pt-2 font-bold'>{data.name}</h2>
    </div>
  )
}

export default Categorie