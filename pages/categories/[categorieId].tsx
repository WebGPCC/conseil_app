import { useRouter } from "next/router"
import Image from "next/image";
import motDeGorge from '@/public/motDeGorge.jpg'
import ProductCard from "@/components/ProductCard";
import Dropdown from "@/components/Dropdown";

const Categorie = () =>{
    const router = useRouter();
    const {categorieId} = router.query;
    return (
        <div className="pb-20">
            <div className="flex justify-center items-center">
                <Image 
                    src={motDeGorge} 
                    alt="Image"
                    className="w-full brightness-50"
                />
                <h1 className="text-white text-5xl absolute">{categorieId}</h1>
            </div>

   

            <div className="px-8 md:px-8">
                <section>
                    <h2 className=" flex flex-wrap font-bold text-3xl pt-10 pb-5 sm:pb-10 md:text-4xl lg:text-5xl  " >Prenez vos&nbsp;<span className="text-green-600">précautions</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at dictum nulla. Ut eu nibh mauris. Nam eget dolor ut mauris dictum dapibus. In elementum eu urna ac tristique. Pellentesque malesuada nisl est, sit amet tempus nisi tristique quis. Etiam id tortor at nulla egestas ultricies eget vitae enim. In vel vehicula ex, ut vestibulum purus. Mauris dictum nibh et pulvinar sodales.</p>
                </section>

                <section>
                    <h2 className=" flex flex-wrap font-bold text-2xl pt-10 pb-5 sm:pb-10 md:text-4xl lg:text-5xl " >Voici les produits qu’on vous&nbsp;<span className="text-green-600">conseils</span></h2>
                    
                    <span>Trier par </span>
                    <div className="flex flex-wrap items-center gap-2 pb-10 w-full">
                        <Dropdown/> 
                        <Dropdown/> 
                        <Dropdown/> 
                    </div>

                    <div className="flex flex-wrap gap-10 justify-between sm:justify-around">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Categorie