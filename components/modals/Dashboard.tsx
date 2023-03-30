import React from 'react'
import Form from '../Form'
import ProductList from '../ProductList'

const Dashboard = () => {
  return (
    <div className='flex flex-warp justify-around py-10'>
          <Form/>
          <ProductList/>
    </div>
  )
}

export default Dashboard