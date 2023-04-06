import React, { useCallback, useState } from 'react'
import axios from 'axios'
import useRegisterProductModal from '@/hooks/useRegisterProductModal'
import useRegisterSymptomeModal from '@/hooks/useRegisterSymptomeModal'
import Input from '../global/Input'
import Modal from './Modal'
import { toast } from 'react-hot-toast'
import ImageUpload from '../ImageUpload'

const RegisterSymptomeModal = () => {
    const productModal = useRegisterProductModal()
    const symptomeModal = useRegisterSymptomeModal()

    const [name,setName] = useState('')
    const [logo,setLogo] = useState('')
    const [banner,setBanner] = useState('')
    const [precaution,setPrecaution] = useState('')
    const [isLoading,setIsLoading] = useState(false)


    const onToggle = useCallback(async ()=> {
        symptomeModal.onClose()
        productModal.onOpen()
    },[productModal,symptomeModal])

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
            <ImageUpload
                value={logo}
                disabled={isLoading}
                onChange={(image)=>setLogo(image)}
                label='Upload un logo'
            />            
            <ImageUpload
                value={banner}
                disabled={isLoading}
                onChange={(image)=>setBanner(image)}
                label='Upload une bannière'
            />
            <Input
                placeholder='Nom du Symptome'
                onChange={(e)=>setName(e.target.value)}
                value={name}
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
        <div className='flex justify-center text-gray-300'>
            Voulez-vous créer un produit ? &nbsp; 
            <span
                onClick={onToggle} 
                className='
                    cursor-pointer hover:underline text-white
                '
            >Oui !</span>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={symptomeModal.isOpen}
            actionLabel='Créer'
            title='Créer un Symptome'
            onClose={symptomeModal.onClose}
            onSubmit={onSubmit}
            body={bobdyContent}
            footer={footerContent}
        />
    )
}

export default RegisterSymptomeModal