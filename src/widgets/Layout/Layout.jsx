import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import UiSidebar from "@/shared/ui/ui-sidebar/ui-sidebar";

export const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar>
        <UiSidebar />
      </Sidebar>
      <Outlet />
    </div>
  );
};
