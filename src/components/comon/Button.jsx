
import { cn } from '../index'
export const Button = ({ children, className }) => {
  return <button className={cn("py-4 px-[25px] rounded-full font-bold text-base bg-primary text-white opacity-100 hover:opacity-90", className)}>
    {children}
   
  </button>





}


