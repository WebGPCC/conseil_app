import React from 'react'

interface ButtonProps {
    label: string,
    secondairy?: boolean,
    fullWidth?: boolean,
    large?: boolean,
    onClick: ()=>void,
    disabled?:boolean,
    outline?:boolean
}

const Button:React.FC<ButtonProps> = ({
    label,
    secondairy,
    fullWidth,
    large,
    onClick,
    disabled,
    outline,
}) => {
  return (
    <button
        disabled={disabled}
        onClick={onClick}
        className={`
            disabled:opacity-70
            disabled:cursor-not-allowed
            hover:opacity-80
            rounded-full
            font-semibold
            transition
            border-2
            ${fullWidth  ? 'w-full' : 'w-fit'}
            ${secondairy ? 'bg-white' : 'bg-green-500'}
            ${secondairy ? 'text-black' : 'text-white'}
            ${secondairy ? 'border-black' : 'border-green-500'}
            ${large ? 'text-xl' : 'text-md'}
            ${large ? 'px-5' : 'px-4'}
            ${large ? 'py-3' : 'py-2'}
            ${outline ? 'bg-transparent' : ''}
            ${outline ? 'border-white' : ''}
            ${outline ? 'text-white' : ''}

        `}
    >
        {label}
    </button>
  )
}

export default Button