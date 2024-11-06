import React from 'react';
import { Outlet } from 'react-router-dom';
import ClientNavbar from '../components/clientSide/clientNavbar/ClientNavbar';
import MobileNavbar from '../components/clientSide/clientNavbar/mobileNavbar';
import Footer from '../components/clientSide/footer/Footer';

const MainLayout = () => {
    return (
        <div>


            <ClientNavbar></ClientNavbar>

            <MobileNavbar></MobileNavbar>

            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;