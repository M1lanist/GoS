import { RouterProvider } from "react-router-dom"
import routes from "./providers/router/routes"

import './globals.css'
import { Input } from "@/shared/components/ui/input";

function App() {
  
  return (
    <div>
      <RouterProvider router={routes} />
      <Input type="email" placeholder="Введите Email"  />   
    </div>
  )
}

export default App;