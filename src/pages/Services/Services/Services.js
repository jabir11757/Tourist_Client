import React from 'react';
import ReviewSection from '../ReviewSection/ReviewSection';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css'

const Services = () => {
    return (
        <div className='services'>
            <ServiceDetails />
            <ReviewSection />
        </div>
    );
};

export default Services;