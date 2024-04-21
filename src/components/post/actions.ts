'use server'
import { revalidatePath } from 'next/cache'

import { prisma } from '@/lib/prisma'
import { postSchema } from './schema'

export async function createPost({ post }) {
  try {
    const validation = postSchema.safeParse(post)

    if (validation.success) {
      const newPost = await prisma.post.create({
        data: post
      })

      revalidatePath('/posts')

      return {
        data: newPost
      }
    }

    return {
      data: validation.error.format(),
      status: 400
    }
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

    return {
      data: deletedPost
    }
  } catch {
    return {
      status: 500
    }
  }
}
