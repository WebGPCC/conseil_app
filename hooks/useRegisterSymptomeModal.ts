import {create} from 'zustand'

interface RegisterSymptomeModalStore{
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const useRegisterSymptomeModal = create<RegisterSymptomeModalStore>((set) =>({
    isOpen: false,
    onOpen: () => set({ isOpen:true }),
    onClose:() => set({ isOpen:false }),
}))

export default useRegisterSymptomeModal