import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

type DeleteArgs = {
  params: {
    id: string
  }
}

export async function DELETE(request: Request, args: DeleteArgs) {
  try {
    const deletedPost = await prisma.post.delete({
      where: { id: args.params.id }
    })

    return NextResponse.json(deletedPost, { status: 201 })
  } catch {
    return NextResponse.json('error', {
      status: 500
    })
  }
}
