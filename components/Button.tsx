import React from 'react'

interface ButtonProps{
    label: string
    secondary?: boolean
    fullWidth?: boolean
    large?: boolean
    onClick: ()=> void
    disabled?: boolean
    outline?: boolean
}

const Button: React.FC<ButtonProps> = ({
    label,
    secondary,
    fullWidth,
    large,
    onClick,
    disabled,
    outline
}) => {
  return (
    <button 
        disabled={disabled} 
        onClick={onClick}
        className={`
            disable:opacity-70
            disbled:cursor-not-allowed
            rounded-full
            font-semibold
            hover:opacity-80
            transition
            border-2
            ${fullWidth ? 'w-full' : 'w-fit'}
            ${secondary ? 'bg-white' : 'bg-green-500'}
            ${secondary ? 'text-black' : 'text-white'}
            ${secondary ? 'border-black' : 'border-green-500'}
            ${large ? 'text-xl' : 'text-md'}
            ${large ? 'px-5' : 'px-4'}
            ${large ? 'py-3' : 'py-2'}
            ${outline ? 'bg-transpartent' : ''}
            ${outline ? 'border-white' : ''}
            ${outline ? 'text-white' : ''}
        `}
    >
        {label}
    </button>
  )
}

export default Button