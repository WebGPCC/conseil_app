import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className='pb-100'>
      <div className='flex justify-center'>
          <div className='w-4/5 flex'>
              <input 
                  type="text"
                  id="searchbar"
                  name="searchbar"
                  placeholder='Ruhme, Mot de gorges, Mal de tête, etc.'
                  className=' bg-gray-200 w-[95%] h-16 rounded-l-2xl pl-6'
              />
              <div className=' bg-gray-200 w-[5%] h-16 rounded-r-2xl flex justify-center items-center '>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='text-4xl text-green-600' />
              </div>
          </div>
      </div>
      <div className='flex justify-center font-bold'>
        <span className='p-5'>Beauté</span>
        <span className='p-5'>|</span>
        <span className='p-5 text-green-600'>Santé</span>
      </div>
    </div>
  )
}

export default SearchBar