import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className='pb-20'>
      <div className='flex justify-center'>
          <div className='w-4/5 flex'>
              <input 
                  type="text"
                  id="searchbar"
                  name="searchbar"
                  placeholder='Ruhme, Mot de gorges, Mal de tête, etc.'
                  className=' flex flex-grow bg-gray-200 h-16 rounded-l-2xl pl-6'
              />
              <div className=' bg-gray-200 h-16 rounded-r-2xl flex flex-end items-center '>
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