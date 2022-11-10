import React from 'react';
import ReviewSection from '../ReviewSection/ReviewSection';
import './ServiceDetails.css'
import ServiceDetailCard from './ServiceDetailCard/ServiceDetailCard';

const ServiceDetails = () => {

    return (
        <div className='service-details'>
            <ServiceDetailCard />
            <ReviewSection />
        </div>
    )
};

export default ServiceDetails;

