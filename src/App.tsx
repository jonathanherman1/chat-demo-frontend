import { useEffect, useState } from 'react'
import { getPosts } from './api/postsApi'
import './App.css'
import { AddPostForm, EmptyState, Posts } from './components'
import type { Post } from './schemas'

function App() {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    getPosts().then((res) => {
      if (res.success) {
        setPosts(res.data)
      }
    })
  }, [])

  return (
    <div className='flex min-h-dvh w-full flex-col items-center'>
      <h1 className='mb-6 text-2xl font-bold md:text-3xl'>Chat Demo</h1>
      <div className='w-full min-w-72 md:w-[44rem]'>
        {posts ? <Posts posts={posts} /> : <EmptyState model='posts'/>}
        <AddPostForm className='mt-6'/>
      </div>
    </div>
  )
}

export default App
