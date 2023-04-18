import SymptomeList from "@/components/SymptomesList";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import useSymptomes from "@/hooks/useSymptomes";
import ErrorSearch from "@/components/ErrorSearch";

export default function Home() {
  const [value, setvalue] = useState('')
  const {data: symptomes = [], isLoading} = useSymptomes()
  const [bool, setBool] = useState(false)

  return (
    <section>
      <h1 className="
          flex 
          justify-center 
          flex-wrap 
          text-center 
          font-bold 
          text-2xl 
          py-10 
          sm:pb-20 
          sm:text-4xl
        " 
      >
        Une solution pour chacun de 
        <span className="text-green-600">
          &nbsp;vos besoins
        </span>
      </h1>

      <SearchBar
        value={value}
        disabled={isLoading}
        onChange={(e)=>{
            setvalue(e.target.value)
        }}
      />
      
      <div className='flex justify-center pt-5 pb-10'>
        <button 
          onClick={(e)=>setBool(true)}
          className={`
            p-5 
            font-bold 
            cursor-pointer 
            ${ bool && 'text-green-600'}
          `}
        >Beauté</button>

        <span className='p-5'>|</span>

        <button 
          onClick={(e)=>setBool(false)}
          className={`
            p-5 
            cursor-pointer 
            font-bold 
            ${ !bool && 'text-green-600'}
          `}
        >Santé</button>
      </div>

      <SymptomeList 
        data={symptomes} 
        isLoading={isLoading} 
        filterby={value} 
        bool={bool}
      />
    </section>
  )
}
