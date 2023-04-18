import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface errorSeachProps{
    phrase : string
}

const ErrorSearch:React.FC<errorSeachProps> = ({phrase}) => {
  return (
    <span className=" 
            w-fit
            flex 
            justify-center 
            items-center 
            text-bold 
            text-xl 
            text-gray-700 
            py-8 
            px-4 
            border 
            border-2 
            border-dotted
            rounded-xl
        ">
            <span className="text-4 xl mr-5">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </span>
            {phrase}
        </span>
  )
}

export default ErrorSearch