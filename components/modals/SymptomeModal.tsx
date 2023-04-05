import React, { useCallback, useState } from 'react'
import Input from '../Input'
import Modal from '../Modal'
import toast from 'react-hot-toast'
import axios from 'axios'
import useProductModal from '@/hooks/useProductModal'
import useSymptomeModal from '@/hooks/useRegisterSymptomeModal'

const LoginModal = () => {
    const productModal = useProductModal()
    const symptomeModal = useSymptomeModal()

    const [name,setName] = useState('')
    const [logo,setLogo] = useState('')
    const [banner,setBanner] = useState('')
    const [precaution,setPrecaution] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const onSubmit = useCallback(async () =>{
        try{
            setIsLoading(true)

            //ADD
            await axios.post('/api/addSymptome',{
                name,
                logo,
                banner,
                precaution
            })

            toast.success("Produit ajouter.")
            
            symptomeModal.onClose()
        }catch(error){
            console.log(error)
            toast.error("Produit non ajouter !")
        } finally {
            setIsLoading(false)
        }
    },[
        symptomeModal,
        setIsLoading,
        name,
        logo,
        banner,
        precaution
    ])
    

    const bobdyContent = (
        <div className='flex flex-col gap-4'>
            <Input
                placeholder='Nom du Symptome'
                onChange={(e)=>setName(e.target.value)}
                value={name}
                disabled={isLoading}
            />
            <Input
                placeholder='Logo'
                onChange={(e)=>setLogo(e.target.value)}
                value={logo}
                disabled={isLoading}
            />
            <Input
                placeholder='Bannière'
                onChange={(e)=>setBanner(e.target.value)}
                value={banner}
                disabled={isLoading}
            />
            <Input
                placeholder='précaution'
                onChange={(e)=>setPrecaution(e.target.value)}
                value={precaution}
                disabled={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div className=''>
            azea
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={symptomeModal.isOpen}
            actionLabel='Créer'
            title='Créer un produit'
            onClose={symptomeModal.onClose}
            onSubmit={onSubmit}
            body={bobdyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal