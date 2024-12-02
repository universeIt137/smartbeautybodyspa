import React from 'react'
import AboutUsTow from '../home-page-tow/AboutUsTow'
import BodyMessage from '../home-page-tow/BodyMessage'
import WhyChooseUs from '../home-page-tow/WhyChooseUs'
import PhotoGallery from './../../../components/clientSide/gallery/PhotoGallery';
import Testimonials from '../homePage/Testimonials';
import OurExperts from '../home-page-tow/OurExperts';
import OurTiming from './../home-page-tow/OurTiming';
import Visite from '../home-page-tow/Visite';

const AboutTwoPage = () => {
    return (
        <div>
            <h1>AboutTwoPage</h1>
            <AboutUsTow></AboutUsTow>
            <BodyMessage></BodyMessage>
            <WhyChooseUs></WhyChooseUs>
            <PhotoGallery></PhotoGallery>
            <Testimonials></Testimonials>
            <OurExperts></OurExperts>
            <OurTiming></OurTiming>
            <Visite></Visite>

        </div>
    )
}

export default AboutTwoPage
