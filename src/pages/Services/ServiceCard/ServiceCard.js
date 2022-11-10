import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({ services }) => {

    const { _id, serviceName, price, image, description } = services;

    return (
        <div className="card card-compact w-full h-full bg-base-100 shadow-xl p-5">
            <figure><img className='service-image' src={image} alt="service" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{description.length > 100 ? description.slice(0, 100) + "..." : description}</p>
                <div className="card-actions justify-end">
                    <p className='mt-3 text-success'><strong>{price}</strong></p>
                    <button className="btn btn-outline"><Link to={`/services/${_id}`}>See Details</Link></button>
                </div>
            </div>
        </div>
    )
};

export default ServiceCard;