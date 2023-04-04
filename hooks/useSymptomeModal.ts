import {create} from 'zustand'

interface SymptomeModalStore{
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const useSymptomeModal = create<SymptomeModalStore>((set) =>({
    isOpen: false,
    onOpen: () => set({ isOpen:true }),
    onClose:() => set({ isOpen:false }),
}))

export default useSymptomeModal