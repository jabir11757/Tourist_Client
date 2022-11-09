import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import './ServiceDetailCard.css'

const ServiceDetailCard = () => {
    const details = useLoaderData();
    const { _id, serviceName, price, rating, description, image } = details;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <div className='details-card'>
                <img src={image} alt="Album" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{description}</p>
                <div className="flex justify-around">
                    <div>
                        <p className='text-success'><strong>{price}</strong></p>
                    </div>
                    <div className='flex'>
                        <FaStar className='mt-1 me-2' />
                        <p className='text-success'>{rating}</p>
                    </div>
                    <div>
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailCard;