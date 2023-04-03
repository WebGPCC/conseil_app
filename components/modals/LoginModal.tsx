import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'
import React, { useCallback, useState } from 'react'
import Input from '../Input'
import Modal from '../Modal'

const LoginModal = () => {
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const onToggle = useCallback(()=>{
        if(isLoading){
            return
        }

        loginModal.onClose()
        registerModal.onOpen()
    },[isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async () =>{
        try{
            setIsLoading(true)

            //TO-DO ADD LOGING

            loginModal.onClose()
        }catch(error){
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [loginModal,setIsLoading]) //<-------- 
    

    const bobdyContent = (
        <div className='flex flex-col gap-4'>
            <Input
                placeholder='Email'
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input
                placeholder='Mot de passe'
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div className='text-neutral-400 text-center mt-4'>
            <p>Pas de compte ?&nbsp;
                <span
                    onClick={onToggle} 
                    className='text-white cursor-pointer hover:underline'
                >S&apos;inscrire</span>
            </p>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            actionLabel='Se connecter'
            title='Connexion'
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bobdyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal