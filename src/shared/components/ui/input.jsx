import * as React from "react"

import { cn } from "@/shared/utils"

const Input = React.forwardRef(({ className, type, errorMessage, ...props }, ref) => {
  return (
    <>
    <input
      type={type}
      className={cn(
        `flex h-9 w-full rounded-md border ${errorMessage ? "border-red-400 bg-rose-300"  : "border-slate-200 bg-white"} max-w-[340px]  px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-950 focus-visible:outline-0 focus-visible:ring-1 focus-visible:ring-purple-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300`,
        className
      )}
      ref={ref}
      {...props} 
    />
    {errorMessage ? (
      <div className="flex items-center mt-0.5  ">
        <svg className="text-red-500" width="16" height="16" viewBox="0 0 15 15" fill="null" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        <span className=" text-gray-500 pl-1 text-[12px]">{errorMessage}</span>
      </div>
    ) : null }
    </>
  );
});
Input.displayName = "Input";

export { Input }
