import { useRouter } from "next/router"
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Dropdown from "@/components/Dropdown";
import useSymptome from "@/hooks/useSymptome";
import { useCallback, useEffect, useState } from "react";
import Tag from "@/components/Tag";
import ErrorSearch from "@/components/ErrorSearch";
import Loading from "@/components/Loading";

const Symptome = () =>{
    
    const router = useRouter(); 
    const {symptomeId} = router.query;
    const {data : symptomeFetch, isLoading} = useSymptome(symptomeId as string)
    const [listVoies, setListVoies] = useState([] as string[])
    const [tags, setTags] = useState<string[]>([])

    const displayedProduct = symptomeFetch?.produits.filter((produit:Record<string,any>)=>produit.voies.some((voie:string)=>tags.includes(voie)))

    useEffect(() => {
        var tmpArray = new Array()
        symptomeFetch?.produits.map((p:Record<string,any>)=>{
            p.voies.map((v:string)=>{
                tmpArray.push(v)
            })
        })
        setListVoies(tmpArray)
    },[symptomeFetch?.produits,setListVoies])

   const handleClickRemove = useCallback(async (event:React.MouseEvent<HTMLElement>)=>{
        event.preventDefault()
        event.stopPropagation()
        const element = event.target as HTMLTextAreaElement
        console.log(element.firstChild?.textContent)
        const word = element.firstChild?.textContent?.replace(/ /g,'')
        word && setTags(tags.filter((tag)=>!tag.includes(word)))
        const domElement = document.getElementById(word as string)
        domElement && (domElement.style.display = 'block')
   },[tags,setTags])

    const handleClickTags = useCallback(async (event:React.MouseEvent<HTMLElement>)=>{
        event.preventDefault()
        const element = event.target as HTMLElement
        setTags((prevTags)=>[...prevTags,element.innerText])
        const domElement = document.getElementById(element.innerText)
        domElement && (domElement.style.display = 'none')
    },[setTags])

    
    if(!symptomeFetch || isLoading){
        return (<Loading/>)
    }

    return (
        
        <div className="pb-20">
            <div className="flex justify-center items-center ">
                <Image 
                    src={symptomeFetch.coverImage} 
                    alt="Image"
                    className="w-full brightness-50 object-cover object-center h-[30vh] sm:h-[40vh] "
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
                    {tags.length != 0 &&
                        <div className="flex flex-wrap items-center gap-2 mb-6">
                            <span className="font-bold">Tag selectionné:&nbsp;</span>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((word)=>
                                    <Tag
                                        key={word} 
                                        value={word} 
                                        onClick={handleClickRemove}
                                        deleteOption
                                    />
                                )}
                            </div>
                        </div>
                    }

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-10">
                            {
                                listVoies.length != 0 &&
                                (<>                                
                                    <span className="font-bold">Trier par:</span>
                                    <div className="flex flex-wrap items-center gap-2 "> 
                                        <Dropdown 
                                            type={"Voie"} 
                                            color={"bg-pink-600"} 
                                            color_hover={"bg-pink-600"}
                                            onClick={handleClickTags}
                                            wordList={listVoies}
                                        />
                                    </div>
                                </>)
                            }
                    </div>

                    <div className="flex flex-wrap gap-10 justify-center sm:justify-around">
                        {symptomeFetch.produits.length != 0 ? 
                            tags.length != 0 ?
                                (displayedProduct.length != 0 ?
                                    displayedProduct.map((produit:Record<string,any>)=>(
                                        <ProductCard key={produit.id} data={produit}/>
                                    ))  
                                :
                                    <ErrorSearch phrase="Aucun produit ne correspond à la recherche"/>
                                )
                            : 
                                symptomeFetch.produits.map((produit:Record<string,any>)=>(
                                    <ProductCard key={produit.id} data={produit}/>
                                ))
                        : 
                            <ErrorSearch phrase={`Nous n'avons pas de produits pour le symptôme ${symptomeFetch.name.toLocaleLowerCase()} pour le moment`}/>
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Symptome