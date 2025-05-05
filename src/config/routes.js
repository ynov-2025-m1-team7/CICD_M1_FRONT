import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "../Pages/Dashboard/index";
import FeedbackPage from "../Pages/Feedback";
import Login from "../Pages/Login";
import Inscription from "../Pages/Inscription";
import JsonFormPage from "../Pages/AddData";
import NotificationsPage from "../Pages/Notification";
import ProtectedRoute from "./protected_routes";

const router = createBrowserRouter([
  {
    path: "/",
    element:  
      <ProtectedRoute>
        <DashboardPage/>
      </ProtectedRoute>,
  },
  {
    path: "/feedback",
    element: 
      <ProtectedRoute>
        <FeedbackPage/>
      </ProtectedRoute>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signin",
    element: <Inscription/>,
  },
  {
    path: "/add-data",
    element: 
      <ProtectedRoute>
        <JsonFormPage/>
      </ProtectedRoute>,
  },
  // {
  //   path: "/notification",
  //   element: 
  //     <ProtectedRoute>
  //       <NotificationsPage/>
  //     </ProtectedRoute>,
  // },
  {
    path: "*",
    element: <div>Page Not Found</div>,
  }
]);
  
const Routes = () => {
  return (
      <RouterProvider router={router} />
  );
}
  
export default Routes;