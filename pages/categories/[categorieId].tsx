import { useRouter } from "next/router"

function Categorie(){
    const router = useRouter();
    const {categoriesId} = router.query;
    return <h1>Categorie {categoriesId} ! </h1>
}

export default Categorie