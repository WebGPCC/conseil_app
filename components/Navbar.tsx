import { faCircleArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/logo.svg'
import Link from 'next/link'
import React from 'react'


const rollbackHystory = () => {
    window.history.go(-1); 
    return false;
}

const Navbar = () => {
  return (
    <div>
         <Head>
            <title>Application de conseil</title>
        </Head>
        <div className='flex justify-between items-center py-5 px-10'>
            <Link href="/">
                <Image 
                    src={logo}
                    alt ='Logo de la pharmacie'
                />
            </Link>
            <div className='flex items-center'>
                <FontAwesomeIcon icon={faCircleArrowLeft} 
                    className='cursor-pointer text-4xl text-green-600' 
                    onClick={rollbackHystory}
                />
                <Link href="/"><FontAwesomeIcon icon={faHouse} className='text-4xl ml-6 color text-green-600 '/></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar