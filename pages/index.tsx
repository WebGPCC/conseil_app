import Categories from "@/components/Categories";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div>
      <h1 className=" flex justify-center flex-wrap text-center font-bold text-2xl py-10  m:pb-20 m:text-4xl" >Une solution pour chacun de vos <span className="text-green-600">&nbsp; besoins</span></h1>
      <SearchBar/>
      <Categories/>
    </div>
  )
}
