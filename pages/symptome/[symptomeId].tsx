import { useRouter } from "next/router"
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Dropdown from "@/components/Dropdown";
import useSymptome from "@/hooks/useSymptome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";
import Tag from "@/components/Tag";

const Symptome = () =>{
    const router = useRouter(); 
    const {symptomeId} = router.query;
    const {data : symptomeFetch, isLoading} = useSymptome(symptomeId as string)
    const [filterByWords, setFilterByWords] = useState([] as string[])
    const [displayedProduct, setDisplayedProduct] = useState([])

    const onToggle = useCallback(async (event:React.MouseEvent<HTMLElement>)=>{
        const option = event.target as HTMLElement
        const newWord = option.innerText.toLowerCase() 
        const isFound = filterByWords.some((word)=>{
            if(word == newWord)
                return true

            return false
        })

        if(!isFound){    
            setFilterByWords((filterByWords)=>[...filterByWords, newWord])
        }else{
            setFilterByWords(filterByWords.filter(word=>word != newWord))
        }

        const produitFiltered = symptomeFetch.produits.filter((produit:Record<string,any>)=>{
            filterByWords.some((word)=>produit.tags_1.includes(word)) ||
            filterByWords.some((word)=>produit.tags_2.includes(word)) ||
            filterByWords.some((word)=>produit.tags_3.includes(word))
        })
        setDisplayedProduct(produitFiltered)

    },[filterByWords,symptomeFetch])

    
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
                <h1 className="text-white text-center text-3xl sm:text-5xl absolute">{symptomeFetch.name}</h1>
            </div>

            <div className="px-8 md:px-8">
                <section>
                    <h2 className="
                        flex 
                        flex-wrap 
                        font-bold 
                        text-3xl 
                        pt-10 
                        pb-5 
                        sm:pb-10 
                        md:text-4xl 
                        lg:text-5xl
                    ">
                        Prenez vos&nbsp;
                        <span className="text-green-600">
                            précautions
                        </span>
                    </h2>
                    <p>{symptomeFetch.precaution}</p>
                </section>

                <section>
                    <h2 className=" flex flex-wrap font-bold text-2xl pt-10 pb-5 sm:pb-10 md:text-4xl lg:text-5xl " >Voici les produits qu’on vous&nbsp;<span className="text-green-600">conseils</span></h2>
                    
                    <div className="flex flex-wrap items-center mb-6">
                        <span className="font-bold">Tag selectionné:&nbsp;</span>
                        <div className="flex flex-wrap  gap-2">
                            <Tag value='test'/>
                            <Tag value='test'/>
                            <Tag value='test'/>
                            <Tag value='test'/>
                            <Tag value='test'/>
                            <Tag value='test'/>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-10">
                        <span className="font-bold">Trier par:</span>
                        <div className="flex flex-wrap items-center gap-2 ">
                            <Dropdown 
                                type={"Contenance"} 
                                color={"bg-green-600"} 
                                color_hover={"bg-green-500"}
                                onClick={onToggle}
                            /> 
                            <Dropdown 
                                type={"Voix"} 
                                color={"bg-pink-600"} 
                                color_hover={"bg-pink-500"}
                                onClick={onToggle}
                            />
                            <Dropdown 
                                type={"Allergène"} 
                                color={"bg-gray-600"} 
                                color_hover={"bg-gray-500"}
                                onClick={onToggle}
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-10 justify-center sm:justify-around">
                        {
                            symptomeFetch.produits.length != 0 ? 
                                //verifier si produitsAfficher existe sinon renvoyer une erreur
                                //utiliser produitsAfficher à la place de "symptomeFetch.produits"
                                filterByWords.length != 0 ?
                                    displayedProduct.length != 0 ?
                                        displayedProduct.map((produit:Record<string,any>)=>(
                                            <ProductCard key={produit.id} data={produit}/>
                                        ))
                                    :
                                    (
                                        <span className=" 
                                            flex 
                                            justify-center 
                                            items-center 
                                            text-bold 
                                            text-xl 
                                            text-gray-700 
                                            py-8 
                                            px-4 
                                            border 
                                            border-2 
                                            border-dotted
                                            rounded-xl
                                        ">
                                            <span className="text-4 xl mr-5">
                                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                            </span>
                                            Aucun produit ne correspond à la recherche
                                        </span>
                                    )

                                : 
                                    symptomeFetch.produits.map((produit:Record<string,any>)=>(
                                        <ProductCard key={produit.id} data={produit}/>
                                    ))
                            : (
                                <span className=" 
                                    flex 
                                    justify-center 
                                    items-center 
                                    text-bold 
                                    text-xl 
                                    text-gray-700 
                                    py-8 
                                    px-4 
                                    border 
                                    border-2 
                                    border-dotted
                                    rounded-xl
                                ">
                                    <span className="text-4 xl mr-5">
                                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                    </span>
                                    Nous n&apos;avons pas de produits pour le {symptomeFetch.name} pour le moment
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