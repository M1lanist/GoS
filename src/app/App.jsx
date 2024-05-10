import { RouterProvider } from "react-router-dom";
import routes from "./providers/router/routes"; 
// import UiNotification from "../../shared/ui/ui-notification/ui-notification";
import './globals.css'; 
// import Headline1 from "../../shared/ui/ui-header/ui-typography/ui-typography";
import Sidebar from '../widgets/Sidebar'; 
import UiSidebar from '../shared/ui/ui-sidebar/ui-sidebar'; 

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
      <Sidebar />
      <UiSidebar/>
       
      
      
      {/* <UiNotification/> */}
    </div>
  );
}

export default App;
