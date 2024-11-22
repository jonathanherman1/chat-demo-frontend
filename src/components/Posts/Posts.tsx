import type { Post as TPost } from '@/schemas'
import { Overflow } from '../Overflow/Overflow'
import { Post } from '../Post/Post'

export type PostsProps = {
  posts: TPost[]
}

export const Posts = ({ posts }: PostsProps) => (
  <>
    <h2 className='mb-4 text-left font-bold sm:text-2xl sm:font-medium'>Posts</h2>
    <Overflow className='bg-content2 p-4'>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </Overflow>
  </>
)
