import { useRouter } from "next/router"
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Dropdown from "@/components/Dropdown";
import useSymptome from "@/hooks/useSymptome";

const Symptome = () =>{
    const router = useRouter(); 
    const {symptomeId} = router.query;
    const {data : symptomeFetch, isLoading} = useSymptome(symptomeId as string)

    if(!symptomeFetch || isLoading){
        return (<div className="flex justify-center items-center h-[80vh] text-3xl text-bold">Loading..</div>)
    }

    return (
        <div className="pb-20">
            <div className="flex justify-center items-center">
                <Image 
                    src={symptomeFetch.coverImage} 
                    alt="Image"
                    className="w-full brightness-50"
                    width='100'
                    height='100'
                />
                <h1 className="text-white text-5xl absolute">{symptomeFetch.name}</h1>
            </div>

            <div className="px-8 md:px-8">
                <section>
                    <h2 
                        className="
                            flex 
                            flex-wrap 
                            font-bold 
                            text-3xl 
                            pt-10 
                            pb-5 
                            sm:pb-10 
                            md:text-4xl 
                            lg:text-5xl
                        "
                    >
                        Prenez vos&nbsp;<span className="text-green-600">précautions</span>
                    </h2>
                    <p>{symptomeFetch.precaution}</p>
                </section>

                <section>
                    <h2 className=" flex flex-wrap font-bold text-2xl pt-10 pb-5 sm:pb-10 md:text-4xl lg:text-5xl " >Voici les produits qu’on vous&nbsp;<span className="text-green-600">conseils</span></h2>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-10">
                        <span className="">Trier par </span>
                        <div className="flex flex-wrap items-center gap-2 ">
                            <Dropdown type={"Contenance"} color={"bg-green-600"} color_hover={"bg-green-500"}/> 
                            <Dropdown type={"Voix"} color={"bg-pink-600"} color_hover={"bg-pink-500"}/>
                            <Dropdown type={"Allergène"} color={"bg-gray-600"} color_hover={"bg-gray-500"}/>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-10 justify-between sm:justify-around">
                        {
                            symptomeFetch.produits ? 
                                symptomeFetch.produits.map((produit:Record<string,any>)=>(
                                    <ProductCard key={produit.id} data={produit}/>
                                ))
                            : (
                                <span className=" text-bold text-3xl">
                                    Nous n&apos;avons de produit pour ce symptome pour le moment
                                </span>
                            )
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Symptome