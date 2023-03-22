import { useRouter } from "next/router"

const Categorie = () =>{
    const router = useRouter();
    const {categorieId} = router.query;
    return <h1>Categorie {categorieId} ! </h1>
}

export default Categorie