import MainPage from "../../../pages/MainPage";
import Autorization from "../../../pages/Autorization";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../../pages/ErrorPage";
import ProfilePage from "@/pages/ProfilePage";
import MyClassPage from "@/pages/MyClassPage";
import BoardPage from "@/pages/BoardPage";
import SchedulePage from "@/pages/SchedulePage";
import LecturesPage from "@/pages/LecturesPage";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage/>
  },
  {
    path: '/login',
    element: <Autorization />
  },
  {
    path: '/myprofile',
    element: <ProfilePage />
  },
  {
    path: '/myclass',
    element: <MyClassPage />
  },
  {
    path: '/board',
    element: <BoardPage />
  },
  {
    path: '/schedule',
    element: <SchedulePage />
  },
  {
    path: '/lectures',
    element: <LecturesPage />
  },
]);

export default routes;