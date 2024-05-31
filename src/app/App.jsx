import React from 'react';
import { Provider } from 'react-redux'; 
import { BrowserRouter } from "react-router-dom";
import routes from "./providers/router/routes";
import './globals.css';
import { store } from './store/store'; 
import Sidebar from '../widgets/Sidebar';
import Authorization from "@/pages/Autorization";
import UiSidebar from '@/shared/ui/ui-sidebar/ui-sidebar';


function App() {
  return (
    <div className="flex-center ">
      {/* <Sidebar/> */}
      <Provider store={store}> 
        <BrowserRouter> 
          <Authorization />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
