import { NextApiRequest, NextApiResponse } from "next";

import prisma from '@/libs/prismadb'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method != 'GET'){
        return res.status(405).end()
    }

    try {
        const { produitId } = req.query

        if(!produitId || typeof produitId != 'string'){
            throw new Error('Invalid ID')
        }
        
        const productUnderSymptome = await prisma.produit.findUnique({
            where : {id : produitId}
        })

        return res.status(200).json(productUnderSymptome)
    } catch (error){
        console.log(error)
        return res.status(405).end()
    }
}