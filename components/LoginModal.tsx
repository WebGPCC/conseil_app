import React from 'react'

const LoginModal = () => {
  return (
    <div className='min-w-fit flex flex-col py-5 px-6 bg-black text-white rounded-xl w-1/3'>
        <h1 className='text-2xl mb-10'>Connection administateur</h1>
        <div className='flex flex-col gap-5'>
            <input type="text" className='w-full h-10 rounded-lg p-5 bg-transparent border border-gray-500' placeholder="Nom utilisateur" />
            <input type="text" className='w-full h-10 rounded-lg p-5 bg-transparent border border-gray-500' placeholder="Email" />
            <input type="text" className='w-full h-10 rounded-lg p-5 bg-transparent border border-gray-500' placeholder="Mot de passe"/>
            <button className='w-full h-10 mt-6 rounded-3xl bg-green-600'> Se connecter</button>
        </div>
    </div>
  )
}

export default LoginModal