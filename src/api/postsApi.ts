const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000'

export const getPosts = async () => {
  try {
    // In the future, add /posts to the end of the URL but keeping it simple for the demo
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
      return { success: false, message: 'There was a problem fetching posts.' }
    }

    return { success: true, data: response.json() }
  } catch (error) {
    console.error('Error fetching posts:', error)
    return { success: false, message: 'There was a problem fetching posts.' }
  }
}

export const createPost = async (postData: object) => {
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

    return { success: true, data: response.json() }
  } catch (error) {
    console.error('Error creating post:', error)
    return { success: false, message: 'There was a problem create your post.' }
  }
}
