import React, { PropsWithChildren } from 'react'
import type { ReactNode } from 'react';
export type Props = {
 className?: string
 children: ReactNode
}
export const BaseContainer:React.FC<Props> = ({children, className}) => {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
    </div>
  )
}
