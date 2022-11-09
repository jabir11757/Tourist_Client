import React from 'react';

const ShortServices = ({ item }) => {
    console.log(item)
    const { image, serviceName, price, description } = item;

    return (
        <div className="card w-full h-full bg-base-100 shadow-xl image-full p-5">
            <figure><img src={image} alt="services" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{description.length > 100 ? description.slice(0, 100) + '...  show more' : description}</p>
                <div className="card-actions justify-end">
                    <p className='mt-2'><strong>{price}</strong></p>
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShortServices;