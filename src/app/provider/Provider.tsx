'use client';
import React, { PropsWithChildren } from 'react'
import { ThemeProvider} from "@material-tailwind/react";

export type Props = PropsWithChildren&{}
const Provider:React.FC<Props> = ({children}) => {
  return (
    <ThemeProvider>
    {children}
  </ThemeProvider>
  )
}

export default Provider