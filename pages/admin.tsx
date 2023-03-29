import Form from '@/components/Form'
import LoginModal from '@/components/LoginModal'
import ProductList from '@/components/ProductList'
import React, { useState } from 'react'

const Admin = () => {
  const [open, setOpen] = useState(true)
  return (
    <>
      { open ? 
        <div className='flex justify-center items-center h-[70vh]'>
          <LoginModal/>
        </div> 
        :  
        <div className='flex flex-warp justify-around py-10'>
          <Form/>
          <ProductList/>
        </div>
      }
    </>
  )
}

export default Admin