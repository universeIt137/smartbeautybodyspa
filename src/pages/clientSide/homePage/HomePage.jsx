import React from 'react';
import SpaBanner from './SpaBanner';
import ServiceSection from './ServiceSection';
import YoutubeSection from './YoutubeSection';
import AboutSection from './AboutSection';
import ProgressSection from './ProgressSection';
import PhotoGallery from '../../../components/clientSide/gallery/PhotoGallery';
import HoursOfOperation from './HoursOfOperation';
import Testimonials from './Testimonials';
import ContactUsSection from './ContactUsSection';
import RelatedSearch from './RelatedSearch';

const HomePage = () => {
    return (
        <div>
            <SpaBanner></SpaBanner>
            <ServiceSection></ServiceSection>
            <YoutubeSection></YoutubeSection>
            <AboutSection></AboutSection>
            <ProgressSection></ProgressSection>
            <PhotoGallery></PhotoGallery>
            <HoursOfOperation></HoursOfOperation>
            <Testimonials></Testimonials>
            <ContactUsSection></ContactUsSection>
            <RelatedSearch></RelatedSearch>
        </div>
    );
};

export default HomePage;