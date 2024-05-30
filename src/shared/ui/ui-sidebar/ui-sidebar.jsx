import React, { useContext, useState } from 'react'; 
import { createContext } from 'react'; 
 
 
const SidebarContext = createContext(); 
 
export default function UiSidebar({ children }) { 
  const [expanded, setExpanded] = useState(true); 
 
  return ( 
    <aside className="h-screen" style={{ width: "220px" }}> 
      <nav className="h-full flex flex-col bg-white border-r shadow-sm relative"> 
        <div className="p-5 pb-8 flex justify-center items-center"> 
          <img 
            src={'/logo/logo.svg'} 
            className={`overflow-hidden transition-all ${expanded ? "w-45 h-auto" : "w-0 h-0"}`}  
            alt="logo" 
          /> 
        </div> 
 
        <SidebarContext.Provider value={{ expanded }}> 
          <ul className="flex-1 px-0">{children}</ul> 
        </SidebarContext.Provider> 
 
        <div className="absolute top-0 bottom-0 left-0 border-r border-gray-200"></div> 
      </nav> 
    </aside> 
  ); 
} 
 
export function SidebarItem({ icon, text, active, alert, onClick }) { 
  const { expanded } = useContext(SidebarContext); 
 
  return ( 
    <li 
      className={` 
        relative flex items-center py-3 px-3 my-1 
        font-medium rounded-md cursor-pointer 
        transition-colors group  
        ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-purple-100 text-gray-600"} 
        ${expanded ? "w-full" : "w-0"} 
      `} 
      onClick={onClick} 
    > 
      {icon} 
      <span 
        className={`overflow-hidden transition-all ${expanded ? "ml-3" : "ml-0"} text-black`}  
      > 
        {text} 
      </span> 
      {alert && ( 
        <div 
          className={`absolute right-2 w-2 h-2 rounded bg-purple-400 ${expanded ? "" : "top-2"}`} 
        /> 
      )} 
 
      {active && ( 
        <div 
          className="absolute top-0 bottom-0 left-0 w-2 bg-purple-200" 
          style={{ zIndex: -1 }} 
        ></div> 
      )} 
 
      {!expanded && ( 
        <div 
          className={` 
            absolute left-full rounded-md px-2 py-1 ml-6 
            bg-indigo-100 text-indigo-800 text-sm 
            invisible opacity-20 -translate-x-3 transition-all 
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 
          `} 
        > 
          {text} 
        </div> 
      )} 
    </li> 
  ); 
}