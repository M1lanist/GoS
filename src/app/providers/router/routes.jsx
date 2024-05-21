import MainPage from "../../../pages/MainPage";
import Autorization from "../../../pages/Autorization";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../../pages/ErrorPage";
import ProfilePage from "@/pages/ProfilePage";
import MyClassPage from "@/pages/MyClassPage";
import BoardPage from "@/pages/BoardPage";
import SchedulePage from "@/pages/SchedulePage";
import LecturesPage from "@/pages/LecturesPage";



const role = 'coach';

// ! Я не стал писать запрос на users так как state manager еще не готов, иначе мне бы пришлось писать запрос в этом файле 


const adminRoutes = [
  {
            path: "/",
            element: <MainPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/login",
            element: <Autorization />,
          },
          {
            path: "/myprofile",
            element: <ProfilePage />,
          },
          {
            path: "/myclass",
            element: <MyClassPage />,
          },
          {
            path: "/board",
            element: <BoardPage />,
          },
          {
            path: "/schedule",
            element: <SchedulePage />,
          },
          {
            path: "/lectures",
            element: <LecturesPage />,
          },
]
const coachRoutes = [
  {
            path: "/",
            element: <MainPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/login",
            element: <Autorization />,
          },
          {
            path: "/myprofile",
            element: <ProfilePage />,
          },
          {
            path: "/myclass",
            element: <MyClassPage />,
          },
          // {
          //   path: "/board",
          //   element: <BoardPage />,
          // },
          // {
          //   path: "/schedule",
          //   element: <SchedulePage />,
          // },
          // {
          //   path: "/lectures",
          //   element: <LecturesPage />,
          // },  
          // ? В таске не указано к каким маршрутам есть доступ у студента и тренера, поэтому я оставил маршруты на свое усмотрение
]
const studRoutes = [
  {
            path: "/",
            element: <MainPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/login",
            element: <Autorization />,
          },
          {
            path: "/myprofile",
            element: <ProfilePage />,
          },
      
  
]


const routes = createBrowserRouter([
  {
    path: '/',
    children: role === 'admin' ? adminRoutes : (role === 'student' ? studRoutes : coachRoutes),
  },
]);





export default routes;