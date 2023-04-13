import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full'>
        <ClipLoader color='green' size={100}/>
    </div>
  )
}

export default Loading