import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ReactProps } from '@/types'
import { SocketIoProvider } from './providers/SocketIo/SocketIo'

export const Providers = ({ children }: ReactProps) => {
  return (
    <NextUIProvider className="bg-background text-foreground">
      <NextThemesProvider attribute="class">
        <SocketIoProvider>
          {children}
        </SocketIoProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}
