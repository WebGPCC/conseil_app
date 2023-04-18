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
    <div>
      <h1 className="
        flex 
        justify-center 
        flex-wrap 
        text-center 
        font-bold 
        text-2xl 
        py-10 
        sm:pb-20 
        sm:text-4xl" 
      >
        Une solution pour chacun de 
        <span className="text-green-600">&nbsp;vos besoins</span></h1>
      <SearchBar
        value={value}
        disabled={isLoading}
        onChange={(e)=>{
            setvalue(e.target.value)
        }}
      />
      
      <div className='flex justify-center pt-5 pb-10'>
        <span 
          className={`cursor-pointer p-5 ${ bool && 'text-green-600 font-bold'}`}
          onClick={(e)=>setBool(!bool)}
          >Beauté</span>
        <span className='p-5'>|</span>
        <span 
          className={`cursor-pointer p-5 ${ !bool && 'text-green-600 font-bold'}`}
          onClick={(e)=>setBool(!bool)}
        >Santé</span>
      </div>

      <SymptomeList data={symptomes} isLoading={isLoading} filterby={value} bool={bool}/>
    </div>
  )
}
