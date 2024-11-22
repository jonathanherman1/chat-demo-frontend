import { render, screen } from '@testing-library/react'
import { AddPostForm } from './AddPostForm'

describe('AddPostForm', () => {
  it('renders the form with initial values', () => {
    render(<AddPostForm />)
    expect(screen.getByLabelText(/name/i)).toHaveValue('')
    expect(screen.getByLabelText(/message/i)).toHaveValue('')
  })

  it('submits the form with correct values', () => {})

  it('resets the form after submission', () => {})

  it('displays errors when form is submitted with empty fields', async () => {})
})
