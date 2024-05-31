import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../../../pages/MainPage/index";
import Autorization from "../../../pages/Autorization/index";
import ErrorPage from "../../../pages/ErrorPage/index";
import ProfilePage from "../../../pages/ProfilePage/index";
import MyClassPage from "../../../pages/MyClassPage/index";
import BoardPage from "../../../pages/BoardPage/index";
import SchedulePage from "../../../pages/SchedulePage/index";
import LecturesPage from "../../../pages/LecturesPage/index";

const role = "coach"; 

const adminRoutes = [
  { path: "/", element: <MainPage />, errorElement: <ErrorPage /> },
  { path: "/login", element: <Autorization /> },
  { path: "/myprofile", element: <ProfilePage /> },
  { path: "/myclass", element: <MyClassPage /> },
  { path: "/board", element: <BoardPage /> },
  { path: "/schedule", element: <SchedulePage /> },
  { path: "/lectures", element: <LecturesPage /> },
];

const coachRoutes = [
  { path: "/", element: <MainPage />, errorElement: <ErrorPage /> },
  { path: "/login", element: <Autorization /> },
  { path: "/myprofile", element: <ProfilePage /> },
  { path: "/myclass", element: <MyClassPage /> },
  { path: "/board", element: <BoardPage /> },
  { path: "/schedule", element: <SchedulePage /> },
  { path: "/lectures", element: <LecturesPage /> },
];

const studRoutes = [
  { path: "/", element: <MainPage />, errorElement: <ErrorPage /> },
  { path: "/login", element: <Autorization /> },
  { path: "/myprofile", element: <ProfilePage /> },
];

const App = () => {
  return (
    <Router>
      <Routes>
        {role === "admin" &&
          adminRoutes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        {role === "student" &&
          studRoutes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        {role === "coach" &&
          coachRoutes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
      </Routes>
    </Router>
  );
};

export default App;
