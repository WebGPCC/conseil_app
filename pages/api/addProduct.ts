import { NextApiRequest, NextApiResponse } from "next";

import prisma from '@/libs/prismadb'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method != 'POST'){
        return res.status(405).end()
    }
    
    try {
        const {
            imageProduct,
            name,
            brand,
            description,
            property,
            use,
            composition,
            reference,
            symptomeId,
            voies
        } = req.body

        const produit = await prisma.produit.create({
            data : {
                image : imageProduct,
                name : name,
                brand : brand,
                description : description,
                property: property,
                use : use,
                composition : composition, 
                reference : reference,
                symptomeId :symptomeId,
                voies: voies
            }
        })

        return res.status(200).json(produit)
    } catch (error){
        console.log(error)
        return res.status(405).end()
    }
}