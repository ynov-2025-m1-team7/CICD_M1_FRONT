import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "../Pages/Dashboard/index";
import Login from "../Pages/Login";
import Inscription from "../Pages/Inscription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signin",
    element: <Inscription/>,
  }
]);
  
const Routes = () => {
  return (
      <RouterProvider router={router} />
  );
}
  
export default Routes;