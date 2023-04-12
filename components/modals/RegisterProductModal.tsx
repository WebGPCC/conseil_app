import React, { useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import useRegisterProductModal from '@/hooks/useRegisterProductModal'
import useRegisterSymptomeModal from '@/hooks/useRegisterSymptomeModal'
import Input from '../global/Input'
import Modal from './Modal'

const RegisterProductModal = () => {
    const productModal = useRegisterProductModal()
    const symptomeModal = useRegisterSymptomeModal()

    const [name,setName] = useState('')
    const [brand,setBrand] = useState('')
    const [description,setDescription] = useState('')
    const [property,setProperty] = useState('')
    const [use,setUse] = useState('')
    const [composition,setComposition] = useState('')
    const [reference,setReference] = useState('')
    const [symptomeId,setSymptomeId] = useState('')
    const [voies,setVoies] = useState([] as string[])
    const [isLoading,setIsLoading] = useState(false)

    const onToggle = useCallback(async ()=> {
        productModal.onClose()
        symptomeModal.onOpen()
    },[productModal,symptomeModal])

    const onSubmit = useCallback(async () =>{
        try{
            setIsLoading(true)

            //ADD
            await axios.post('/api/addProduct',{
                name,
                brand,
                description,
                property,
                use,
                composition, 
                reference,
                symptomeId,
                voies
            })

            toast.success("Produit ajouter.")
            
            productModal.onClose()
        }catch(error){
            console.log(error)
            toast.error("Produit non ajouter !")
        } finally {
            setIsLoading(false)
        }
    },[
        productModal,
        setIsLoading,
        name,
        brand,
        description,
        property,
        use,
        composition, 
        reference,
        symptomeId,
        voies
    ])
    

    const bobdyContent = (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-wrap sm:flex-nowrap gap-4'>
                <Input
                    placeholder='Nom'
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    disabled={isLoading}
                />
                <Input
                    placeholder='Marque'
                    onChange={(e)=>setBrand(e.target.value)}
                    value={brand}
                    disabled={isLoading}
                />
                <Input
                    placeholder='Référence'
                    onChange={(e)=>setReference(e.target.value)}
                    value={reference}
                    disabled={isLoading}
                />                
                <Input
                    placeholder='Id Symptome'
                    onChange={(e)=>setSymptomeId(e.target.value)}
                    value={symptomeId}
                    disabled={isLoading}
                />
            </div>
            <Input
                placeholder='Description'
                onChange={(e)=>setDescription(e.target.value)}
                value={description}
                disabled={isLoading}
                />
            <Input
                placeholder='Utilisation'
                onChange={(e)=>setUse(e.target.value)}
                value={use}
                disabled={isLoading}
            />
            <Input
                placeholder='Composition'
                onChange={(e)=>setComposition(e.target.value)}
                value={composition}
                disabled={isLoading}
            />
            <Input
                placeholder='Propriété'
                onChange={(e)=>setProperty(e.target.value)}
                value={property}
                disabled={isLoading}
            />
            <label className='text-white' htmlFor="tags">Choisir les tags:</label>
            <select 
                multiple
                name="voies" 
                id="tags-select" 
                onChange={(e)=>{
                    console.log(e.target.value)
                    setVoies([e.target.value])
                }}
                className='
                    w-full
                    p-4
                    text-lg
                    text-white
                    bg-black
                    border-2
                    border-neutral-800
                    rounded-md
                    outline-white
                    focus:border-green-500
                    focus:border-2
                    transition
                    disabled:bg-neutral-900
                    disabled:opacity-70
                    disabled:cursor-no-allowed
                '
            >
                <option value="oral">Oral</option>
                <option value="local">Local</option>
                <option value="nazal">Nazal</option>
            </select>
        </div>
    )
    const footerContent = (
        <div className='flex justify-center text-gray-300'>
            Voulez-vous créer un symptome ? &nbsp; 
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
            isOpen={productModal.isOpen}
            actionLabel='Créer'
            title='Créer un produit'
            onClose={productModal.onClose}
            onSubmit={onSubmit}
            body={bobdyContent}
            footer={footerContent}
        />
    )
}

export default RegisterProductModal