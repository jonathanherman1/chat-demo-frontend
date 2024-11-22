const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL || 'http://localhost:3000'
import type { Post } from '../schemas'

type ApiResponseSuccess = {
  success: true
  data: Post[]
}

type ApiResponseError = {
  success: false
  message: string
}

export type ApiResponse = ApiResponseSuccess | ApiResponseError

export const getPosts = async (): Promise<ApiResponse> => {
  try {
    // In the future, add /posts to the end of the URL but keeping it simple for the demo
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
      return { success: false, message: 'There was a problem fetching posts.' }
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching posts:', error)
    return { success: false, message: 'There was a problem fetching posts.' }
  }
}

export const createPost = async (postData: Post): Promise<ApiResponse> => {
  try {
    // In the future, add /posts to the end of the URL but keeping it simple for the demo
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    })

    if (!response.ok) {
      return { success: false, message: 'There was a problem create your post.' }
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error('Error creating post:', error)
    return { success: false, message: 'There was a problem create your post.' }
  }
}
