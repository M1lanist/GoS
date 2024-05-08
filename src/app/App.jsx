import { RouterProvider } from "react-router-dom"
import routes from "./providers/router/routes"

import './globals.css'
import { Input } from "@/shared/components/ui/input";
import { PasswordInput } from "@/shared/components/ui/password-input";
import { EyeIcon } from "lucide-react";

function App() {
  
  return (
    <div>
      <RouterProvider router={routes} />
      


       
    </div>
  )
}

export default App;