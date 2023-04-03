import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'
import axios from 'axios'
import React, { useCallback, useState } from 'react'
import Input from '../Input'
import Modal from '../Modal'
import { toast } from 'react-hot-toast'
import { signIn } from 'next-auth/react'

const RegisterModal = () => {
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

    const [username, setUsername] = useState('') 
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const onToggle = useCallback(()=>{
        if(isLoading){
            return
        }

        registerModal.onClose()
        loginModal.onOpen()
    },[isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async () =>{
        try{
            setIsLoading(true)

            await axios.post('/api/register', {
                email,
                username,
                password
            })

            toast.success('Compte créé.')

            signIn('credentials',{
                email,
                password
            })

            registerModal.onClose()
        }catch(error){
            console.log(error)
            toast.error("Quelque chose ne s'est pas bien passé...")
        } finally {
            setIsLoading(false)
        }
    }, [registerModal,username,email,password]) //<-------- 
    

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

    //1:01:29 timestemp
    const footerContent = (
        <div className='text-neutral-400 text-center mt-4'>
            <p>Déjà un compte ?&nbsp;
                <span
                    onClick={onToggle} 
                    className='text-white cursor-pointer hover:underline'
                >Se connecter</span>
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