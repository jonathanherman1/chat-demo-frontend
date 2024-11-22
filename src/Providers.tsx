import type { ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <NextUIProvider className="bg-background text-foreground">
      <NextThemesProvider attribute="class">{children}</NextThemesProvider>
    </NextUIProvider>
  )
}
