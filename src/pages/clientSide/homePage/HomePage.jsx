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
            <div className="lg:mt-40">
                <YoutubeSection></YoutubeSection>
            </div>

            <div className="lg:mt-40">
                <AboutSection></AboutSection>
            </div>

            <div className="lg:mt-40">
                <ProgressSection></ProgressSection>
            </div>


            <div className="lg:mt-40">
                <PhotoGallery></PhotoGallery>
            </div>


            <div className="lg:mt-40">
                <HoursOfOperation></HoursOfOperation>
            </div>

            <div className="lg:mt-40">
                <Testimonials></Testimonials>
            </div>

            <div className="lg:mt-40">
                <ContactUsSection></ContactUsSection>
            </div>
            <div className="lg:my-4">
                <RelatedSearch></RelatedSearch>
            </div>
        </div>
    );
};

export default HomePage;