import { prisma } from 'server'
import { Types } from 'types'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const posts = await prisma.post.findMany()
    return NextResponse.json(posts.reverse())
  } catch {
    return NextResponse.json('error', {
      status: 500
    })
  }
}

export async function POST(req: Request) {
  try {
    const body: Types.Post = await req.json()
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
