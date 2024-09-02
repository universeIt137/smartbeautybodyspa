import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashbaord from '../pages/adminSide/dashboard/Dashbaord';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashbaord></Dashbaord>
      },
    ]
  }
]);



export default router;