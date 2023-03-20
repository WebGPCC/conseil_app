import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl flex justify-center font-bold pb-20" >Une solution pour chacun de vos <span className="text-green-600">&nbsp; besoins</span></h1>

      <SearchBar></SearchBar>
      <span>test</span>
    </div>
  )
}
