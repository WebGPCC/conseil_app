import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react'
import{faCircleArrowLeft,faHouse} from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head';
import Link from 'next/link';
import Navbar from './Navbar';

interface LayoutProps{
    children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
        <Navbar/>
        <div>
            {children}
        </div>
    </>
  )
}

export default Layout