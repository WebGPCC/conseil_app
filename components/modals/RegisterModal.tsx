import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'
import { Modak } from 'next/font/google'
import React, { useCallback, useState } from 'react'
import Input from '../Input'
import Modal from '../Modal'

const RegisterModal = () => {
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

    const [username, setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)


    const onSubmit = useCallback(async () =>{
        try{
            setIsLoading(true)

            //TO-DO ADD RESGISTER && LOGIN

            registerModal.onClose()
        }catch(error){
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [registerModal,setIsLoading]) //<-------- 
    

    const bobdyContent = (
        <div className='flex flex-col gap-4'>
            <Input
                placeholder='Nom utilisateur'
                onChange={(e)=>setUsername(e.target.value)}
                value={username}
                disabled={isLoading}
            />
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

    //1:01/29 timestemp
    const footerContent = (
        <div className='text-neutral-400 text-center mt-4'>
            <p>Déjà un compte ?&nbsp;
                <span className='text-white cursor-pointer hover:underline'>Se connecter</span>
            </p>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            actionLabel="S'inscrire"
            title="Créer un compte"
            onClose={registerModal.onClose}
            onSubmit={onSubmit}
            body={bobdyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal