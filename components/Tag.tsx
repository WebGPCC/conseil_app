import React from 'react'

interface TagProps{
  value : string
}

const Tag:React.FC<TagProps> = ({value}) => {
  return (
    <span 
      className='
        text-center
        w-fit 
        px-6 
        border 
        border-green-600 
        rounded-xl 
        text-green-600
      '
    > {value} </span>
  )
}

export default Tag