import { postSchema } from './schemas'

describe('postSchema', () => {
  it('validates a valid post', () => {
    const validPost = {
      createdAt: new Date(),
      _id: '12345',
      username: 'john_doe',
      message: 'Hello, world!',
    }
    const result = postSchema.safeParse(validPost)
    expect(result.success).toBe(true)
  })

  it('fails if username is missing', () => {
    const invalidPost = {
      createdAt: new Date(),
      _id: '12345',
      message: 'Hello, world!',
    }
    const result = postSchema.safeParse(invalidPost)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.errors[0].message).toBe('Name is required')
    }
  })

  it('fails if message is missing', () => {
    const invalidPost = {
      createdAt: new Date(),
      _id: '12345',
      username: 'john_doe',
    }
    const result = postSchema.safeParse(invalidPost)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.errors[0].message).toBe('Message is required')
    }
  })

  it('passes if createdAt and _id are missing', () => {
    const validPost = {
      username: 'john_doe',
      message: 'Hello, world!',
    }
    const result = postSchema.safeParse(validPost)
    expect(result.success).toBe(true)
  })

  it('fails if username is empty', () => {
    const invalidPost = {
      createdAt: new Date(),
      _id: '12345',
      username: '',
      message: 'Hello, world!',
    }
    const result = postSchema.safeParse(invalidPost)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.errors[0].message).toBe('Name is required')
    }
  })

  it('fails if message is empty', () => {
    const invalidPost = {
      createdAt: new Date(),
      _id: '12345',
      username: 'john_doe',
      message: '',
    }
    const result = postSchema.safeParse(invalidPost)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.errors[0].message).toBe('Message is required')
    }
  })
})