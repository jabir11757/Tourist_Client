import React from 'react';
import { Link } from 'react-router-dom';

const ShortServices = ({ item }) => {
    console.log(item)
    const { _id, image, serviceName, price, description } = item;

    return (
        <div className="card w-full h-full bg-base-100 shadow-xl image-full p-5">
            <figure><img src={image} alt="services" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                <div className="card-actions justify-end">
                    <p className='mt-2'><strong>{price}</strong></p>
                    <button className="btn btn-active"><Link to={`/services/${_id}`}>See Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ShortServices;