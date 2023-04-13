import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

interface SearchBarProps {
  value? : string
  disabled?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar:React.FC<SearchBarProps> = ({
  value,
  disabled,
  onChange
}) => {
  return (
    <div className='pb-10'>
      <div className='flex justify-center'>
          <div className='w-4/5 flex'>
              <input 
                  onChange={onChange}
                  disabled={disabled}
                  value={value}
                  type="text"
                  placeholder='Ruhme, Mot de gorges, Mal de tête, etc.'
                  className='
                    flex
                    flex-grow
                    bg-gray-200
                    h-16
                    rounded-l-2xl
                    p-2
                    placeholder
                    truncate...
                  '
              />
              <div className='
                bg-gray-200
                h-16
                rounded-r-2xl
                flex
                flex-end
                items-center 
              '>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='m-5 text-xl text-green-600' />
              </div>
          </div>
      </div>
      <div className='flex justify-center'>
        <span className='cursor-pointer p-5'>Beauté</span>
        <span className='p-5'>|</span>
        <span className='cursor-pointer p-5 text-green-600 font-bold'>Santé</span>
      </div>
    </div>
  )
}

export default SearchBar