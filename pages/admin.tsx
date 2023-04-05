import AccountModal from '@/components/modals/AccountModal'
import Form from '@/components/Form'
import ProductList from '@/components/ProductList'
import React, { useState } from 'react'
import Dashboard from '@/components/modals/Dashboard'

const Admin = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <>
      { isLogin ? 
          <Dashboard/>
        :  
        <div className='flex flex-col justify-center items-center h-[70vh]'>
          <AccountModal/>
        </div> 
      }
    </>
  )
}

export default Admin