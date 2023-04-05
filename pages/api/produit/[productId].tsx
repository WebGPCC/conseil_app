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
        const { productId } = req.query

        if(!productId || typeof productId != 'string'){
            throw new Error('Invalid ID')
        }
        
        const productUnderSymptome = await prisma.produit.findUnique({
            where : {id : productId}
        })

        return res.status(200).json(productUnderSymptome)
    } catch (error){
        console.log(error)
        return res.status(405).end()
    }
}