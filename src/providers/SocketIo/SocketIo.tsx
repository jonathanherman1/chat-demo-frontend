import { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import type { ReactProps } from '@/types'
import { SocketIoContext } from './SocketIoContext'

const url = import.meta.env.VITE_API_URL

export const SocketIoProvider = ({ children }: ReactProps) => {
  const [socket, setSocket] = useState<Socket | null>(null)

  useEffect(() => {
    const newSocket = io(url)
    setSocket(newSocket)

    return () => {
      newSocket.close()
    }
  }, [])

  return (
    <SocketIoContext.Provider value={{ socket }}>
      {children}
    </SocketIoContext.Provider>
  )
}
