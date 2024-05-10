import * as React from "react"

import { cn } from "@/shared/utils"
import { CircleX } from "lucide-react";

const Input = React.forwardRef(({suffix, className, type, errorMessage, ...props }, ref) => {
  return (
    <>
    <div className="flex max-w-[340px] justify-between gap-2 items-center">
      <input
        type={type}
        className={cn(
          `flex h-9 w-[340px] rounded-md border ${errorMessage ? "border-red-500 bg-rose-300"  : "border-slate-200 bg-white"}   px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-950 focus-visible:outline-0 focus-visible:ring-1 focus-visible:ring-purple-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300`,
          className
        )}
        ref={ref}
        {...props} 
      />
      {suffix}
     
    </div>
    
    {errorMessage ? (
      <div className="flex items-center mt-0.5  ">
      <CircleX className="h-[16px] text-red-500" />  
      <span className=" text-gray-500 pl-1 text-[12px]">{errorMessage}</span>
      </div>
    ) : null }
    
    </>
  );
});
Input.displayName = "Input";

export { Input }