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
    const [clicked, setClicked] = useState(false) 
    return (
        <div className="inline-block relative z-50 w-full">
            <button 
                onClick={(e)=>setClicked(!clicked)} 
                className={`
                    inline-flex 
                    justify-between 
                    items-center 
                    w-full
                    p-4 
                    text-white 
                    font-semibold 
                    rounded-full 
                    drop-shadow
                     
                    sm:justify-none
                    ${color}
                `}
            >
                <span className="mr-20">{type}</span>
                { clicked ? 
                    <FontAwesomeIcon icon={faChevronUp}/> 
                    : 
                    <FontAwesomeIcon icon={faChevronDown}/>
                }
            </button>

            <ul className={`
                    absolute 
                    ${clicked === false ? 
                        'hidden':'visible'
                    } 
                    w-full 
                    mt-1 
                    z-50 
                    text-white 
                    rounded-xl 
                    ${color}
                `}
            >
                {wordList?.map((word)=>
                    <li 
                        id={word}
                        key={word} 
                        onClick={onClick} 
                        className={`
                            text-white 
                            py-2 
                            pl-4 
                            whitespace-no-wrap 
                            cursor-pointer
                            hover:${color_hover}
                        `} 
                    >
                        {word}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Dropdown