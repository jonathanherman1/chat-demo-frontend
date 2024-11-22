import type { Post as TPost } from '@/schemas'
import { DateDisplay } from '../DateDisplay/DateDisplay'

export type PostsProps = {
  post: TPost
}

export const Post = ({ post }: PostsProps) => (
  <div className="mb-4">
    <p>
      <span className="font-bold">{post.username}</span>
      <DateDisplay date={post.createdAt} className="ms-2 text-tiny" />
    </p>
    <p>{post.message}</p>
  </div>
)
