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
        const symptomes = await prisma.symptome.findMany({
            orderBy: {
                name : 'asc'
            }
        })

        return res.status(200).json(symptomes)
    } catch (error){
        console.log(error)
        return res.status(405).end()
    }
}