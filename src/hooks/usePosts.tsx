import { useEffect, useState } from 'react'
import { getPosts } from '@/api/postsApi'
import type { Post } from '@/schemas'
import { useSocketIo } from "./useSocketIo"

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    getPosts().then((res) => {
      if (res.success) {
        setPosts(res.data)
      }
    })
  }, [])

  const { socket } = useSocketIo()

  useEffect(() => {
    if (socket) {
      const handleNewPost = (newPost: Post) => {
        setPosts((prevPosts) => [newPost, ...prevPosts])
      }

      socket.on('newPost', handleNewPost)

      // Clean up the event listener on component unmount
      return () => {
        socket.off('newPost', handleNewPost)
      }
    }
  }, [socket])

  return { posts }
}
