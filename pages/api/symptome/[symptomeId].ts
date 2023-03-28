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
        const { symptomeId } = req.query

        if(!symptomeId || typeof symptomeId != 'string'){
            throw new Error('Invalid ID')
        }

        const actualSymptome = await prisma.symptome.findUnique({
            where: {
                id: symptomeId
            }
        })

        return res.status(200).json(actualSymptome)
    } catch (error){
        console.log(error)
        return res.status(405).end()
    }
}