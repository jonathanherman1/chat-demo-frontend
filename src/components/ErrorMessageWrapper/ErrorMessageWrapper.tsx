import type { ReactNode } from 'react'

export const ErrorMessageWrapper = ({ children }: { children: ReactNode }) => (
  <p className="ml-2 text-left">{children}</p>
)
