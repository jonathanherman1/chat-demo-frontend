
import './App.css'
import { AddPostForm, EmptyState, Posts } from './components'
import { usePosts } from './hooks'

function App() {
  const { posts } = usePosts()

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
