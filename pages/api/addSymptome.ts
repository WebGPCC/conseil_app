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
            logo,
            banner,
            precaution
        } = req.body

        const symptomeProduct = await prisma.symptome.create({
            data : {
                name : name, 
                logoImage : logo,
                coverImage : banner,
                precaution : precaution,
                produits : {
                    create  : []
                }
            }
        })

        return res.status(200).json(symptomeProduct)
    } catch (error){
        console.log(error)
        return res.status(405).end()
    }
}