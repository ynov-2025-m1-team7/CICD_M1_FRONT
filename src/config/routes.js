import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "../Pages/Dashboard/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage/>,
  },
]);
  
const Routes = () => {
  return (
      <RouterProvider router={router} />
  );
}
  
export default Routes;