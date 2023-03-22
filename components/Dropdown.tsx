import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Dropdown = () => {
    return (
       <>
            <div className="dropdown inline-block relative">
                <button className="bg-green-600 text-white font-semibold p-4  rounded-full inline-flex items-center">
                    <span className="mr-20">Contenance</span>
                    <FontAwesomeIcon icon={faChevronDown}/>
                </button>
                <ul className="dropdown-menu absolute hidden text-white rounded-full pt-1">
                    <li className=""><a className="text-white rounded-t-lg bg-green-600 hover:bg-green-500 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                    <li className=""><a className="text-white bg-green-600 hover:bg-green-500 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                    <li className=""><a className="text-white rounded-b-lg bg-green-600 hover:bg-green-500 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
                </ul>
            </div>
       </> 
  )
}

export default Dropdown