import './globals.css';

import AppRouter from "./providers/router/routes";
import { RouterProvider } from "react-router-dom";
import Sidebar from '../widgets/Sidebar';
import UiSidebar from '../shared/ui/ui-sidebar/ui-sidebar';
import routes from "./providers/router/routes";

// import Headline1 from "../../shared/ui/ui-header/ui-typography/ui-typography";



// import UiNotification from "@/shared/ui/ui-notification/ui-notification";

function App() {
  return (
    <div className="flex">
       {/* <Sidebar>
        <UiSidebar/>
       </Sidebar> */}
       <AppRouter/>
     </div>
  );
}

export default App;
