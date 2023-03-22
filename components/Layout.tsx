import React from 'react'
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