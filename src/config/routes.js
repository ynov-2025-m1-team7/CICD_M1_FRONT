import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "../Pages/Dashboard/index";
import FeedbackPage from "../Pages/Feedback";
import Login from "../Pages/Login";
import Inscription from "../Pages/Inscription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage/>,
  },
  {
    path: "/feedback",
    element: <FeedbackPage/>,
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