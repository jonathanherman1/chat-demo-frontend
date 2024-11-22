import { useContext } from "react"
import { SocketIoContext } from "../providers/SocketIo/SocketIoContext"

export const useSocketIo = () => {
  const context = useContext(SocketIoContext)
  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketIoProvider')
  }
  return context
}
