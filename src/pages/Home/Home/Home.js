import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JoinSurvey from '../../JoinSurvey/JoinSurvey';
import Banner from '../Banner/Banner';
import ShortServices from '../ShortServices/ShortServices';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://assignment-for-tourism-server.vercel.app/home-services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Banner />
            <h2 className='text-3xl font-bold text-center my-5'>Services</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 p-5'>
                {
                    services.map(item => <ShortServices key={item._id} item={item} />)
                }
            </div>

            <div className='flex justify-center my-5'>
                <button className='btn'><Link to='/services'>See All</Link></button>
            </div>

            <JoinSurvey />

        </div>
    );
};

export default Home;