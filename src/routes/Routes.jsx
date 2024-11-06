import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/adminSide/dashboard/Dashboard';
import AddProduct from '../pages/adminSide/addProduct/AddProduct';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/clientSide/homePage/HomePage';
import AboutPage from '../pages/clientSide/aboutPage/AboutPage';
import ContactPage from '../pages/clientSide/contactPage/ContactPage';
import GalleryPage from '../pages/clientSide/galleryPage/GalleryPage';
import PackagePage from '../pages/clientSide/packagePage/PackagePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/packages",
        element: <PackagePage></PackagePage>
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>
      },
      {
        path: "/gallery",
        element: <GalleryPage></GalleryPage>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "add-product",
        element: <AddProduct></AddProduct>
      }
      
    ]
  }
]);



export default router;