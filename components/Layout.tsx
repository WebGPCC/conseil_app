import React from 'react'
import Navbar from './Navbar';

import {motion, AnimatePresence} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

interface LayoutProps{
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
        <Navbar/>
        <AnimatePresence>
          <motion.div
            initial={{ opacity:0 , y:15 }}
            animate={{ opacity:1 , y:0 }}
            transition={{ delay: 0.25 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
    </>
  )
}

export default Layout