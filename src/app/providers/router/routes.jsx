import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Autorization from "../../../pages/Autorization/index";
import BoardPage from "../../../pages/BoardPage/index";
import ErrorPage from "../../../pages/ErrorPage/index";
import { Layout } from "@/widgets/Layout/Layout";
import LecturesPage from "../../../pages/LecturesPage/index";
import MainPage from "../../../pages/MainPage/index";
import MyClassPage from "../../../pages/MyClassPage/index";
import ProfilePage from "../../../pages/ProfilePage/index";
import React from "react";
import SchedulePage from "../../../pages/SchedulePage/index";
import { useSelector } from "react-redux";

const withSidebarAdminRoutes = [
  { path: "/", element: <MainPage />, errorElement: <ErrorPage /> },
  { path: "/myprofile", element: <ProfilePage /> },
];

const adminRoutes = [
  // { path: "/", element: <MainPage />, errorElement: <ErrorPage /> },
  { path: "/myclass", element: <MyClassPage /> },
  { path: "/board", element: <BoardPage /> },
  { path: "/schedule", element: <SchedulePage /> },
  { path: "/lectures", element: <LecturesPage /> },
];

const coachRoutes = [
  { path: "/", element: <MainPage />, errorElement: <ErrorPage /> },
  { path: "/myprofile", element: <ProfilePage /> },
  { path: "/myclass", element: <MyClassPage /> },
  { path: "/board", element: <BoardPage /> },
  { path: "/schedule", element: <SchedulePage /> },
  { path: "/lectures", element: <LecturesPage /> },
];

const studRoutes = [
  { path: "/", element: <MainPage />, errorElement: <ErrorPage /> },
  { path: "/myprofile", element: <ProfilePage /> },
];

const AppRouter = () => {
  const userRoles = useSelector((store) => store.auth.roleNames);
  console.log(userRoles);
  return (
    <div style={{ flex: "1" }}>
      <Router>
        <Routes>
          {userRoles?.includes("Admin") &&
            adminRoutes.map((route, index) => <Route key={index} {...route} />)}
          {userRoles?.includes("stutend") &&
            studRoutes.map((route, index) => <Route key={index} {...route} />)}

            
          {userRoles?.includes("coach") &&
            coachRoutes.map((route, index) => <Route key={index} {...route} />)}
          <Route element={<Layout />}>
            {userRoles?.includes("Admin") &&
              withSidebarAdminRoutes.map((route, index) => (
                <Route key={index} {...route} />
              ))}
          </Route>
          <Route path="/login" element={<Autorization />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
