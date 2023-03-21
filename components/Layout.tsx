import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react'
import logo from '../public/logo.svg'
import{faCircleArrowLeft,faHouse} from '@fortawesome/free-solid-svg-icons'

interface LayoutProps{
    children: React.ReactNode;
}

const rollbackHystory = () => {
    window.history.go(-1); 
    return false;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className=''>
        <div className='flex justify-between items-center py-5 px-10'>
            <a href="./">
                <Image 
                    src={logo}
                    alt ='Logo de la pharmacie'
                />
            </a>
            <div className='flex items-center'>
                <FontAwesomeIcon icon={faCircleArrowLeft} 
                    className='cursor-pointer text-4xl text-green-600' 
                    onClick={rollbackHystory}
                />
                <a href="/"><FontAwesomeIcon icon={faHouse} className='text-4xl ml-6 color text-green-600 '/></a>
            </div>
        </div>

        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout