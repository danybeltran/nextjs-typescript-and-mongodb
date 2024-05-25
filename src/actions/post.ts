'use server'
import { revalidatePath } from 'next/cache'
import { actionData } from 'atomic-utils'

import { prisma } from '@/lib/prisma'
import { postSchema } from '@/schemas'

export async function createPost({ post }) {
  try {
    const validation = postSchema.safeParse(post)

    if (validation.success) {
      const newPost = await prisma.post.create({
        data: post
      })

      revalidatePath('/posts')

      return actionData(newPost)
    }

    return actionData(validation.error.format(), {
      status: 400
    })
  } catch {
    return {
      status: 500
    }
  }
}

export async function deletePost(id: string) {
  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id: id
      }
    })

    revalidatePath('/posts')

    /**
     * actionResult formats a response so http-react can read data, status code and error
     * The code below will be formated as { data: deletedPost, status: 200 }.
     * You can ommit the status part like this `return actionResult(deletedPost)`
     */
    return actionData(deletedPost, {
      status: 200
    })
  } catch {
    return {
      status: 500
    }
  }
}
