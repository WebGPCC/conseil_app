import {create} from 'zustand'

interface ResgisterProductModalStore {
    isOpen: boolean
    onOpen: ()=>void
    onClose: ()=>void
}

const useRegisterProductModal = create<ResgisterProductModalStore>((set)=>({
    isOpen:false,
    onOpen: ()=>set({ isOpen:true }),
    onClose:()=>set({ isOpen:false }),
}))

export default useRegisterProductModal