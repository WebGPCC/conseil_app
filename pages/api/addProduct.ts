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
            name,
            description,
            property,
            use,
            composition,
            reference,
            symptomeId
        } = req.body

        const produit = await prisma.produit.create({
            data : {
                name : name,
                description : description,
                property: property,
                use : use,
                reference : reference,
                symptomeId :symptomeId,
                composition : composition, 
            }
        })

        return res.status(200).json(produit)
    } catch (error){
        console.log(error)
        return res.status(405).end()
    }
}