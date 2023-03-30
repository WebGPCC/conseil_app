import serverAuth from "@/libs/serveurAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method != 'GET'){
        return res.status(405).end()
    }

    try{
        const {currentAdmin} = await serverAuth(req)
        return res.status(200).json(currentAdmin)
    }catch(error){
        console.log(error)
        return res.status(400).end()
    }
}