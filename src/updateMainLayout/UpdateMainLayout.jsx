import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNavbar from '../components/clientSide/clientNavbar/mobileNavbar'
import Footer from '../components/clientSide/footer/Footer'
import FloatingBtn from '../components/clientSide/floatingBtn/FloatingBtn'
import UpdateNavbar from './../components/clientSide/update-navbar/UpdateNavbar';

const UpdateMainLayout = () => {
    return (
        <div>
            <UpdateNavbar></UpdateNavbar>
            <MobileNavbar></MobileNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <FloatingBtn></FloatingBtn>
        </div>
    )
}

export default UpdateMainLayout
