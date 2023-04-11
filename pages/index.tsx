import SymptomeList from "@/components/SymptomesList";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import useSymptomes from "@/hooks/useSymptomes";

export default function Home() {
  const [value, setvalue] = useState('')
  const {data: symptomes = [], isLoading} = useSymptomes()

  return (
    <div>
      <h1 className=" flex justify-center flex-wrap text-center font-bold text-2xl py-10  sm:pb-20 sm:text-4xl" >Une solution pour chacun de vos<span className="text-green-600">&nbsp;besoins</span></h1>
      <SearchBar
        value={value}
        disabled={isLoading}
        onChange={(e)=>{setvalue(e.target.value)}}
      />
      <SymptomeList data={symptomes} isLoading={isLoading} filterby={value}/>
    </div>
  )
}
