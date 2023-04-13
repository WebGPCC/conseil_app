import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

type Props = {
    color: string
    color_hover: string
    type: string
    wordList: string[]
    onClick: (event:React.MouseEvent<HTMLElement>)=>void
}

const Dropdown: React.FC<Props> = ({color,color_hover,type, onClick, wordList}) => {

    const [isDisplay,setIsDisplay] = useState(false)

    const checkDisplay = async()=>{
         setIsDisplay(!isDisplay)
    }
    
    return (
        <div className="dropdown inline-block relative w-full sm:w-fit">
            <button onMouseEnter={checkDisplay} onMouseLeave={checkDisplay}  className={"text-white "+color+" font-semibold p-4 rounded-full inline-flex justify-between sm:justify-none items-center w-full sm:w-fit"}>
                <span className="mr-20">{type}</span>
                {isDisplay ?
                    <FontAwesomeIcon icon={faChevronUp}/>
                    :
                    <FontAwesomeIcon icon={faChevronDown}/>
                }
            </button>
            <ul className="dropdown-menu absolute hidden text-white rounded-full pt-1 w-full z-50">
                {wordList?.map((word)=>
                    <li 
                        id={word}
                        key={word} 
                        onClick={onClick} 
                        className={`text-white rounded-md ${color} hover:${color_hover} py-2 pl-4 mb- block whitespace-no-wrap cursor-pointer`} 
                    >
                        {word}
                    </li>
                )}
            </ul>
        </div>
  )
}

export default Dropdown