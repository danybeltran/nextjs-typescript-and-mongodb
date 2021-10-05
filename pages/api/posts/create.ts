import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "src/Models/index"
import { IPost } from "src/Models/Post";
import { connectToDatabase } from "src/utils"

export default async function getPosts(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            await connectToDatabase()
            const body: IPost = JSON.parse(req.body)
            const newPost = new Post(body)
            const saved = await newPost.save()
            res.send(saved)
        } catch (err) {
            console.log(err)
            res.status(500).send("error")
        }
    } else {
        res.status(405).json({ messagge: "Method not allowed" })
    }

}
