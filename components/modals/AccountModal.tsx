import { useState } from 'react'
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const AccountModal = () => {
  const [backendChange, setBackendChange] = useState(false);

  function handleClick(){
    setBackendChange(!backendChange)
  }

  return (
    <>
      { backendChange ? <RegisterModal/> : <LoginModal/>}
      
      <button className="hover:underline" onClick={handleClick}>Seulement pour les administrateurs</button>
    </>
  )
}

export default AccountModal