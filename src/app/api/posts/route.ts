import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

import { postSchema } from '@/app/schemasValidations'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validation = postSchema.safeParse(body)

    if (validation.success) {
      const newPost = await prisma.post.create({
        data: body
      })
      return NextResponse.json(newPost)
    }

    return NextResponse.json(validation.error.format(), { status: 400 })
  } catch {
    return NextResponse.json('error', {
      status: 500
    })
  }
}
