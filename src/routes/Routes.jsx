import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/adminSide/dashboard/Dashboard';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/clientSide/homePage/HomePage';
import AboutPage from '../pages/clientSide/aboutPage/AboutPage';
import ContactPage from '../pages/clientSide/contactPage/ContactPage';
import GalleryPage from '../pages/clientSide/galleryPage/GalleryPage';
import Packages from '../pages/clientSide/packagePage/Packages';
import PackageDetails from '../pages/clientSide/packagePage/PackageDetails';
import AddPackagePage from '../pages/adminSide/packageRelatedPages/AddPackagePage';
import Login from '../pages/clientSide/credentialPages/Login';
import PrivateRoutes from './PrivateRoutes';
import Register from '../pages/clientSide/credentialPages/Register';
import ManagePackagePage from '../pages/adminSide/packageRelatedPages/ManagePackagePage';
import UpdatePackagePage from '../pages/adminSide/packageRelatedPages/UpdatePackagePage';
import BookNowForm from '../pages/clientSide/bookNowPage/BookNowForm';
import ManageBooking from '../pages/adminSide/bookingRelatedPages/ManageBooking';
import HomePageContentForm from '../pages/adminSide/homepageRelatedPages/HomePageContentForm';
import ManagePhotoGallery from '../pages/adminSide/photoGalleryRelatedPages/ManagePhotoGallery';
import ManageOfficeHour from '../pages/adminSide/officeHourRelatedPages/ManageOfficeHour';
import ManageTestimonial from '../pages/adminSide/testimonialRelatedPages/ManageTestimonial';

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
        element: <Packages></Packages>
      },
      {
        path: "/package-details/:id",
        element: <PackageDetails></PackageDetails>
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
      },
      {
        path: "/book-now/:id",
        element: <BookNowForm></BookNowForm>
      }
    ]
  },
  {
    path: "/admin-login",
    element: <Login></Login>
  },
  {
    path: "/admin-register",
    element: <Register></Register>
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes>
      <DashboardLayout></DashboardLayout>
    </PrivateRoutes>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "add-package",
        element: <AddPackagePage></AddPackagePage>
      },
      {
        path: "manage-package",
        element: <ManagePackagePage></ManagePackagePage>
      },
      {
        path: "update-package/:id",
        element: <UpdatePackagePage></UpdatePackagePage>
      },
      {
        path: "manage-booking",
        element: <ManageBooking></ManageBooking>
      },
      {
        path: "manage-content",
        element: <HomePageContentForm></HomePageContentForm>
      },
      {
        path: "manage-gallery",
        element: <ManagePhotoGallery></ManagePhotoGallery>
      },
      {
        path: "manage-office-hour",
        element: <ManageOfficeHour></ManageOfficeHour>
      },
      {
        path: "manage-testimonial",
        element: <ManageTestimonial></ManageTestimonial>
      }

    ]
  }
]);



export default router;