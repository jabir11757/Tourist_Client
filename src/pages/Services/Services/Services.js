import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('https://assignment-for-tourism-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>All services</h2>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5'>
                {
                    allServices.map(services => <ServiceCard key={services._id} services={services} />)
                }

            </div>
        </div>
    );
};

export default Services;