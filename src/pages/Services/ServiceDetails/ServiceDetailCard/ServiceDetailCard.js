import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './ServiceDetailCard.css'

const ServiceDetailCard = () => {
    const details = useLoaderData();
    const { _id, serviceName, price, rating, description, image } = details;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <div className='details-card'>
                <img src={image} alt="Album" />

                <div className="flex justify-around">
                    <p className='text-success mt-1'><strong>{price}</strong></p>
                    <button className="btn btn-outline"><Link to='/services'>Back</Link></button>
                </div>

            </div>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{description}</p>


            </div>
        </div>
    );
};

export default ServiceDetailCard;