import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

import prisma from '@/libs/prismadb'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method != 'POST'){
        return res.status(405).end()
    }

    try{
        const {email, username, password} = req.body
        const hashedPassword = await bcrypt.hash(password, 12);

        const admin = await prisma.admin.create({
            data:{
                email,
                username,
                hashedPassword
            }
        })

        return res.status(200).json(admin)
    }catch(error){
        console.log(error);
        return res.status(400).end()
    }
}