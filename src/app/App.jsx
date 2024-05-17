import { RouterProvider } from "react-router-dom";
import routes from "./providers/router/routes"; 
import './globals.css'; 
// import Headline1 from "../../shared/ui/ui-header/ui-typography/ui-typography";
import Sidebar from '../widgets/Sidebar'; 
import UiSidebar from '../shared/ui/ui-sidebar/ui-sidebar'; 
import UiNotification from "@/shared/ui/ui-notification/ui-notification";

function App() {
  return (
    <div className="flex">

    <div className="flex w-screen">
       <Sidebar>
       <UiSidebar/>
       </Sidebar>
       <RouterProvider router={routes} />
    </div>
      
 
     
     </div>
  );
}

export default App;
