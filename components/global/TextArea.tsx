import React from 'react'

interface TextAreaProps {
    placeholder : string
    value? : string
    type? : string
    disabled?: boolean
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: React.FC<TextAreaProps> = ({
    placeholder,
    value,
    type,
    disabled,
    onChange
}) => {
  return (
    <textarea
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
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
    ></textarea>
  )
}

export default TextArea