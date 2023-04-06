import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useCallback } from 'react'
import Button from '../global/Button'

interface ModalProps{
    isOpen?: boolean
    onClose: () => void
    onSubmit: () => void
    title?: string
    body?: React.ReactElement
    footer?: React.ReactElement
    actionLabel: string 
    disabled? :boolean
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
}) => {
    const handlerClose = useCallback(()=>{
        if(disabled){
            return
        }

        onClose()
    },[disabled,onClose])

    const handlerSubmit = useCallback(()=>{
        if(disabled){
            return
        }

        onSubmit()
    },[disabled, onSubmit])

    if(!isOpen){
        return null
    }

    return (
        <div
            className='
                justify-center
                items-center
                flex
                overflow-x-hidden
                overflow-y-auto
                fixed
                inset-0
                z-50
                outline-none
                focus:outline-800
                bg-neutral-800
                bg-opacity-70
            '
        >
            <div
                className='
                    relative
                    w-full
                    lg:w-3/6
                    my-6
                    mx-auto
                    lg:max-w-3xl
                    h-full
                    lg:h-auto
                '
            >
                {/* Content */}
                <div
                    className='
                        h-full
                        lg:h-auto
                        border-0
                        rounded-lg
                        shadow-lg
                        relative
                        flex
                        flex-col
                        w-full
                        bg-black
                        outline-none
                        focus:outline-none
                    '
                >
                    {/* Header */}
                    <div
                        className='
                            flex
                            items-center
                            justify-between
                            p-10
                            rounded-t           
                        '
                    >
                       <h3 className='
                            text-3xl 
                            font-semibold
                            text-white
                       '>
                        {title}
                       </h3>

                       <button
                            onClick={handlerClose}
                            className='
                                p-1
                                ml-auto
                                border-0
                                text-white
                                hover:opacity-70
                                transition
                            '
                       >
                            <FontAwesomeIcon icon={faXmark}/>
                       </button>
                    </div>
                    
                    {/* Body */}
                    <div
                        className='
                            relative
                            p-10
                            flex-auto
                            bg-black
                        '
                    >
                        {body}
                    </div>
                    {/* footer */}
                    <div className='flex flex-col gap-2 p-10 bg-black'>
                        <Button 
                            disabled={disabled}  
                            label={actionLabel}
                            secondairy
                            fullWidth
                            large
                            onClick={handlerSubmit}
                        />
                        {footer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal