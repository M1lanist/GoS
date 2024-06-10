import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Autorization from "../../../pages/Autorization/index";
import BoardPage from "../../../pages/BoardPage/index";
import ErrorPage from "../../../pages/ErrorPage/index";
import { Layout } from "@/widgets/Layout/Layout";
import LecturesPage from "../../../pages/LecturesPage/index";
import MainPage from "../../../pages/MainPage/index";
import MyClassPage from "../../../pages/MyClassPage/index";
import ProfilePage from "../../../pages/ProfilePage/index";
import { ProtectedRoute } from "./authGuard";
import SchedulePage from "../../../pages/SchedulePage/index";
import { useSelector } from "react-redux";

const routes = [
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    roles: ["Admin", "coach", "student"],
    layout: "sidebar",
  },
  {
    path: "/myprofile",
    element: <ProfilePage />,
    roles: ["Admin", "coach", "student"],
    layout: "sidebar",
  },
  {
    path: "/myclass",
    element: <MyClassPage />,
    roles: ["Admin", "coach"],
    layout: "sidebar",
  },
  {
    path: "/board",
    element: <BoardPage />,
    roles: ["Admin", "coach"],
    layout: "sidebar",
  },
  {
    path: "/schedule",
    element: <SchedulePage />,
    roles: ["Admin", "coach"],
    layout: "sidebar",
  },
  {
    path: "/lectures",
    element: <LecturesPage />,
    roles: ["Admin", "coach"],
    layout: "sidebar",
  },
  {
    path: "/login",
    element: <Autorization />,
    roles: ["Guest", "Admin", "Coach"],
    layout: "public",
  },
];

const AppRouter = () => {
  return (
    <div style={{ flex: "1" }}>
      <Router>
        <Routes>
          {routes.map(({ path, element, layout, errorElement, roles }) => {
            if (layout === "sidebar") {
              return (
                <Route
                  key={Math.random()}
                  element={<ProtectedRoute roles={roles} />}
                >
                  <Route path={path} element={<Layout />}>
                    <Route index element={element} />
                    {errorElement && <Route path="*" element={errorElement} />}
                  </Route>
                </Route>
              );
            }
            return (
              <Route key={path} element={<ProtectedRoute roles={roles} />}>
                <Route path={path} element={element}>
                  {errorElement && <Route path="*" element={errorElement} />}
                </Route>
              </Route>
            );
          })}
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
