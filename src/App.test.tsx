import { render } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  it('renders app', () => {
    const { getByText } = render(<App />)
    expect(getByText('Tailwind is working!')).toBeInTheDocument()
  })
})
