import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'

import {motion} from 'framer-motion'

const card = {
  hidden: {
    opacity : 0,
    y: 30
  },
  show: {
    opacity : 1,
    y:0,
    transition: {
      duration: 1
    }
  }
}

interface SymptomeCardProps {
  data: Record<string,any>
}

const SymptomeCard: React.FC<SymptomeCardProps> = ({data}) => {
  const router = useRouter()

  const goToSymptome = useCallback((event:any) => {
      event.stopPropagation()
      router.push(`/symptome/${data.id}`)
    },
    [router, data.id],
  )
  
  return (
    <motion.div
        variants={card}
        onClick={goToSymptome}
        className='
          flex
          flex-col
          items-center
          justify-center
          cursor-pointer
          hover:text-green-500 
        '
    >
      <Image
          src={data?.logoImage}
          alt='image du symptome'
          width='100'
          height='100'
          className='object-fill
          w-[200px]
          h-[200px]
          border-2
          border-gray-800
          hover:border-green-600
          rounded-full
          p-5'
      />
      <h2 className='pt-2 font-bold text-center'>{data.name}</h2>
    </motion.div>
  )
}

export default SymptomeCard