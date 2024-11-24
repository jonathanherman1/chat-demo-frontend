import { z } from 'zod'

export const postSchema = z.object({
  createdAt: z.date().optional(),
  _id: z.string().optional(),
  username: z
    .string({ required_error: 'Name is required', invalid_type_error: 'Name must be a string' })
    .min(1, 'Name is required'),
  message: z
    .string({ required_error: 'Message is required', invalid_type_error: 'Message must be a string' })
    .min(1, 'Message is required'),
})

export type Post = z.infer<typeof postSchema>
