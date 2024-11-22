import { z } from "zod"

export const postSchema = z.object({
  createdAt: z.date().optional(),
  username: z.string().min(1, 'Name is required'),
  message: z.string().min(1, 'Message is required'),
})

export type Post = z.infer<typeof postSchema>
