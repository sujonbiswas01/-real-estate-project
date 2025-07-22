import React from 'react'
import { cn } from '../index'
const Grradient = ({children,className}) => {
  return (
    <span className={cn('bg-gradient-to-b  from-[#00D2FF] to-[#059DBE] bg-clip-text text-transparent font-primary  font-bold  text-[46px]',className)}>
        {children}
      
    </span>
  )
}

export default Grradient
