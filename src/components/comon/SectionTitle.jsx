import React from 'react'
import { cn } from '../index'
export const SectionTitle = ({children,className}) => {
  return (
    <h1 className={cn(' bg-blue-200 py-5 text-[46px] text-black leading-[100%] font-primary font-bold',className)}>
        {children}
    </h1>
  )
}