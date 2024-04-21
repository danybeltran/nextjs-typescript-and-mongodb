'use server'

import { prisma } from '@/lib/prisma'
import { postSchema } from '../schemasValidations'
import { revalidatePath } from 'next/cache'

export async function savePost({ post }) {
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
      data: deletedPost,
      status: 201
    }
  } catch {
    return {
      status: 500
    }
  }
}
