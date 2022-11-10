import React, { useContext } from 'react';
import './ServiceDetails.css'
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const ServiceDetails = () => {
    const details = useLoaderData();
    const { user } = useContext(AuthContext);


    const { _id, serviceName, price, description, image } = details;

    const handlePlaceOrder = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const message = form.message.value;

        const review = {
            service_id: _id,
            serviceName,
            name,
            message
        }

    }


    return (
        <div className='service-details'>
            {/* <ServiceDetailCard /> */}
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className='details-card'>
                    <img src={image} alt="Album" />

                    <div className="flex justify-around">
                        <p className='text-success mt-1'><strong>{price}</strong></p>
                        <button className="btn btn-outline"><Link to='/services'>Back</Link></button>
                    </div>

                </div>
                <div className="card-body mt-8">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>{description}</p>


                </div>
            </div>
            {/* <ReviewSection /> */}

            <div className='text-center m-5'>
                <h2 className='text-2xl font-bold text-center'>Reviews</h2>

                <div className='review-card'>
                    <table class="table-auto">
                        <thead>
                            <tr>
                                <th>Song</th>
                                <th>Artist</th>
                            </tr>
                        </thead>
                        <tbody>


                        </tbody>
                    </table>
                </div>

                <form onSubmit={handlePlaceOrder}>
                    <div>
                        <h2 className='my-2'>Place Review</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <input name='name' type="text" placeholder="name" className="input input-ghost h-8 w-full input-bordered" />
                            <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost h-8 w-full input-bordered" />
                        </div>
                        <textarea name='message' className='textarea textarea-bordered h-12 w-full my-4' placeholder='Review' />
                        <input className='btn' type='submit' value='Submit' />
                    </div>
                </form>

            </div>
        </div>
    )
};

export default ServiceDetails;

