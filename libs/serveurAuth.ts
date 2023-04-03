import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

import prisma from '@/libs/prismadb'

const serverAuth =async (req: NextApiRequest) => {
    const session = await getSession({ req })
    
    //1:31:55 timestamp
    if(!session?.user?.email){
        throw new Error ('Not signed in')
    }

    const currentAdmin = await prisma.admin.findUnique({
        where:{
            email: session.user.email
        }
    })

    if(!currentAdmin){
        throw new Error('Not signed in')
    }

    return { currentAdmin }
}

export default serverAuth