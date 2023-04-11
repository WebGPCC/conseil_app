import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

type Props = {
    color: string
    color_hover: string
    type: string
    onClick: (event:React.MouseEvent<HTMLElement>)=>void
}

const Dropdown: React.FC<Props> = ({color,color_hover,type, onClick}) => {

    return (
        <div className="dropdown inline-block relative">
            <button className={"text-white "+color+" font-semibold p-4  rounded-full inline-flex items-center"}>
                <span className="mr-20">{type}</span>
                <FontAwesomeIcon icon={faChevronDown}/>
            </button>
            <ul className="dropdown-menu absolute hidden text-white rounded-full pt-1 w-full z-50">
                <li onClick={onClick} className=""><a className={"text-white rounded-t-lg "+color+" hover:"+color_hover+" py-2 pl-4 block whitespace-no-wrap"} href="#">Crème</a></li>
                <li onClick={onClick} className=""><a className={"text-white "+color+" hover:"+color_hover+" py-2 pl-4 block whitespace-no-wrap"} href="#">Paumade</a></li>
                <li onClick={onClick} className=""><a className={"text-white rounded-b-lg "+color+" hover:"+color_hover+" py-2 pl-4 block whitespace-no-wrap"} href="#">Tous les -al</a></li>
            </ul>
        </div>
  )
}

export default Dropdown