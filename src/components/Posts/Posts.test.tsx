import { render } from '@testing-library/react'
import type { Post as TPost } from '@/schemas'
import { Posts } from './Posts'

describe('Posts', () => {
  const mockPosts: TPost[] = [
    { _id: '1', username: 'Jon', message: 'Content 1' },
    { _id: '2', username: 'Sam', message: 'Content 2' },
  ]

  it('renders without crashing', () => {
    const { container } = render(<Posts posts={mockPosts} />)
    expect(container).toBeInTheDocument()
  })

  it('renders the correct number of posts', () => {
    const { getAllByTestId } = render(<Posts posts={mockPosts} />)
    const posts = getAllByTestId('post')
    expect(posts.length).toBe(mockPosts.length)
  })

  it('renders the post content correctly', () => {
    const { getByText } = render(<Posts posts={mockPosts} />)
    mockPosts.forEach((post) => {
      expect(getByText(post.username)).toBeInTheDocument()
      expect(getByText(post.message)).toBeInTheDocument()
    })
  })

  it('handles empty posts array', () => {
    const { getByText } = render(<Posts posts={[]} />)

    expect(getByText(/no posts/i)).toBeInTheDocument()
  })
})
