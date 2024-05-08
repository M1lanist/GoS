import MainPage from "../../../pages/MainPage";
import Autorization from "../../../pages/Autorization";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../../pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage/>
  },
  {
    path: '/login',
    element: <Autorization />
  }
]);

export default routes;