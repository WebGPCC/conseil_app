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

        const symptomeProduct = await prisma.symptome.update({
            where : {
                id : symptomeId
            },
            data : {
                produits : {
                    create : [
                        {
                            name : name,
                            description : description,
                            property: property,
                            use : use,
                            composition : composition, 
                            reference : reference
                        }
                    ]
                }
            }
        })

        return res.status(200).json(symptomeProduct)
    } catch (error){
        console.log(error)
        return res.status(405).end()
    }
}