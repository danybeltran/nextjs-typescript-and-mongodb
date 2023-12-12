import { z } from 'zod'

export const postSchema = z.object({
  title: z.string().min(1, 'Title can not be empty'),
  content: z.string().min(1, 'Description can not be empty')
})
