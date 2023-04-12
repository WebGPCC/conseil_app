import { faXbox } from '@fortawesome/free-brands-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface TagProps{
  value : string
  deleteOption? : boolean
  onClick: (event:React.MouseEvent<SVGSVGElement>) => void
}

const Tag:React.FC<TagProps> = ({value, deleteOption,onClick}) => {
  return (
    <span
      className={`
        ${deleteOption ? 
          'flex justify-between items-center px-2 ' 
        : 
          'text-center px-6'
        }      
        w-fit 
        py-1 
        border 
        border-green-600 
        rounded-full 
        text-green-600`
      }
    >
      <span id={`tag_${value}`}>
        {value}
      </span>

      {deleteOption && (
        <FontAwesomeIcon 
          onClick={onClick}
          className="pl-4 cursor-pointer" 
          icon={faXmark} 
        />
      )}
    </span>
  )
}

export default Tag