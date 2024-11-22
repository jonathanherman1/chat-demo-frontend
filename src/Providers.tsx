import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ReactProps } from '@/types'

export const Providers = ({ children }: ReactProps) => {
  return (
    <NextUIProvider className="bg-background text-foreground">
      <NextThemesProvider attribute="class">{children}</NextThemesProvider>
    </NextUIProvider>
  )
}
