import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className={`flex justify-center items-center h-[80vh]`}>
        <ClipLoader color='green' size={200}/>
    </div>
  )
}

export default Loading