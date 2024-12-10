import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNavbar from '../components/clientSide/clientNavbar/mobileNavbar'
import Footer from '../components/clientSide/footer/Footer'
import FloatingBtn from '../components/clientSide/floatingBtn/FloatingBtn'
import UpdateNavbar from './../components/clientSide/update-navbar/UpdateNavbar';
import TopBar from '../components/clientSide/clientNavbar/TopBar'

const UpdateMainLayout = () => {
    return (
        <div>
            <TopBar></TopBar>
            <div className='sticky top-0 z-50 ' >
                <UpdateNavbar></UpdateNavbar>
            </div>
            <MobileNavbar></MobileNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <FloatingBtn whatsapp={"01967519562"} phone = {"01312742062" } ></FloatingBtn>
        </div>
    )
}

export default UpdateMainLayout
