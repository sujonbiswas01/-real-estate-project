import React from 'react'

export const Container = ({children,className}) => {
  return (
    <div className={cn('max-w-screen-xl w-full mx-auto px-2.5',className)}>
        {children}
    </div>
  )
}


