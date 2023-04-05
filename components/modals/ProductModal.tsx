import React, { useCallback, useState } from 'react'
import Input from '../Input'
import Modal from '../Modal'
import toast from 'react-hot-toast'
import axios from 'axios'
import useRegisterProductModal from '@/hooks/useRegisterProductModal'
import useRegisterSymptomeModal from '@/hooks/useRegisterSymptomeModal'

const ProductModal = () => {
    const productModal = useRegisterProductModal()
    const symptomeModal = useRegisterSymptomeModal()

    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [property,setProperty] = useState('')
    const [use,setUse] = useState('')
    const [composition,setComposition] = useState('')
    const [reference,setReference] = useState('')
    const [symptomeId,setSymptomeId] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const onSubmit = useCallback(async () =>{
        try{
            setIsLoading(true)

            //ADD
            await axios.post('/api/addProduct',{
                name,
                description,
                property,
                use,
                composition, 
                reference,
                symptomeId
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
        description,
        property,
        use,
        composition, 
        reference,
        symptomeId
    ])
    

    const bobdyContent = (
        <div className='flex flex-col gap-4'>
            <Input
                placeholder='Nom du produit'
                onChange={(e)=>setName(e.target.value)}
                value={name}
                disabled={isLoading}
            />
            <Input
                placeholder='Description'
                onChange={(e)=>setDescription(e.target.value)}
                value={description}
                disabled={isLoading}
            />
            <Input
                placeholder='Propriété'
                onChange={(e)=>setProperty(e.target.value)}
                value={property}
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
                placeholder='Référence'
                onChange={(e)=>setReference(e.target.value)}
                value={reference}
                disabled={isLoading}
            />
            <Input
                placeholder='Id de la catégorie'
                onChange={(e)=>setSymptomeId(e.target.value)}
                value={symptomeId}
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

export default ProductModal