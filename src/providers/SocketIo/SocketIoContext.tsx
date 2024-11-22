import { createContext } from 'react'
import type { Socket } from 'socket.io-client'

type SocketIoContextProps = {
  socket: Socket | null
}

export const SocketIoContext = createContext<SocketIoContextProps | undefined>(undefined)
