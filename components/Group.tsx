import { faChevronDown, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
    label:string
    content:string
}

const Group = ({label,content}: Props) => {
  return (
    <div className="py-5 bg-white">
    <details className="group">
      <summary className="flex justify-start items-center font-medium cursor-pointer list-none">
        <span className="text-lg">
          <FontAwesomeIcon className="mr-2" icon={faLeaf}/>{label}
        </span>
        {/* <span className="transition group-open:rotate-180">
          <FontAwesomeIcon icon={faChevronDown} className='h-4' />  
        </span> */}
      </summary>
    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
      {content}
    </p>
    </details>
  </div>
  )
}

export default Group