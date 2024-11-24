import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SocketIoProvider } from './SocketIo'
import { SocketIoContext } from './SocketIoContext'

const mockClose = vi.fn()
vi.mock('socket.io-client', () => {
  return {
    io: vi.fn(() => ({
      close: mockClose,
    })),
  }
})

describe('SocketIoProvider', () => {
  it('provides a socket instance to its children', () => {
    const TestComponent = () => {
      const context = React.useContext(SocketIoContext)
      return <div>{context?.socket ? 'Socket is connected' : 'No socket'}</div>
    }

    render(
      <SocketIoProvider>
        <TestComponent />
      </SocketIoProvider>
    )

    expect(screen.getByText('Socket is connected')).toBeInTheDocument()
  })

  it('closes the socket on unmount', () => {
    const { unmount } = render(
      <SocketIoProvider>
        <div>Test</div>
      </SocketIoProvider>
    )

    unmount()

    expect(mockClose).toHaveBeenCalled()
  })
})
