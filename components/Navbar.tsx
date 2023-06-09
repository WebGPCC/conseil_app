import { faCircleArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/logo.svg'
import Link from 'next/link'
import React, { useCallback } from 'react'
import useRegisterProductModal from '@/hooks/useRegisterProductModal'

const Navbar = () => {
    const rollbackHystory = () => {
        window.history.go(-1); 
        return false
    }
    
    // const productModal = useRegisterProductModal()
    
    // const onClick = useCallback(
    // () => {
    //     productModal.onOpen()
    // },
    // [productModal],)
  return (
    <div>
        <Head>
            <title>Nos conseils pour vous - GPCC</title>
        </Head>
        <div className={`
            flex 
            justify-between 
            items-center 
            py-4 
            px-5 
            sm:py-5 
            sm:px-10
        `}>
            <Link href="/">
                <Image 
                    src={logo}
                    alt ='Logo de la pharmacie'
                />
            </Link>

            <div className={`
                flex 
                items-center 
                gap-6
            `}>
                {/* <button 
                    onClick={onClick} 
                    className={`
                        py-2 
                        px-5 
                        mx-5 
                        border 
                        border-green-500 
                        text-green-500 
                        rounded-3xl
                        hover:bg-black 
                    `}
                >Créer un produit</button>  */}

                <button onClick={rollbackHystory}>
                    <FontAwesomeIcon 
                        icon={faCircleArrowLeft} 
                        className={`
                            text-4xl 
                            text-green-600
                            cursor-pointer 
                        `}
                    />
                </button>

                <Link href="/">
                    <FontAwesomeIcon 
                        icon={faHouse} 
                        className={`
                            text-4xl 
                            text-green-600
                        `}
                    />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar