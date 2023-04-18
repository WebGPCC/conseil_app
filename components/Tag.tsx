import React from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface TagProps{
  value : string
  deleteOption? : boolean
  onClick?: (event:React.MouseEvent<HTMLElement>) => void
}

const Tag:React.FC<TagProps> = ({value, deleteOption,onClick}) => {
  return (
    <span
      onClick={onClick}
      className={`
        w-fit 
        py-1 
        text-green-600
        rounded-full 
        border 
        border-green-600 
        ${deleteOption && 'cursor-pointer'}
        ${deleteOption ? 
          `
            px-2
            flex 
            justify-between 
            items-center 
          ` 
        : 
          'text-center px-6'
        }      
      `}
    >
      <span id={`tag_${value}`}>
        {value}
      </span>

      {deleteOption && (
        <FontAwesomeIcon 
          icon={faXmark} 
          className={`
            pl-4 
            pointer-events-none
          `} 
        />
      )}
    </span>
  )
}

export default Tag