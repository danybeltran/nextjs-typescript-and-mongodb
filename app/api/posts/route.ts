import prisma from '../../../prisma/client'
import { NextResponse } from 'next/server'
import { postSchema } from 'app/schemasValidations'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validation = postSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 })
    }

    const newPost = await prisma.post.create({
      data: body
    })

    return NextResponse.json(newPost)
  } catch {
    return NextResponse.json('error', {
      status: 500
    })
  }
}

export async function DELETE(req: Request) {
  const query = new URL(req.url).searchParams
  const id = query.get('id') as string
  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id
      }
    })

    return NextResponse.json(deletedPost)
  } catch {
    return NextResponse.json(
      {
        error: 'Failed to remove post'
      },
      {
        status: 500
      }
    )
  }
}
