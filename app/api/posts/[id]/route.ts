import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/server'

export async function DELETE(
  response: NextRequest,
  { params }: { params: { id: string } }
) {
  const post = await prisma.post.findUnique({
    where: { id: params.id }
  })

  if (!post)
    return NextResponse.json({ error: 'Invalid post' }, { status: 404 })

  const result = await prisma.post.delete({
    where: { id: params.id }
  })
  return NextResponse.json(result, { status: 201 })
}
