import React, { useContext, useEffect, useState } from 'react';
import './ServiceDetails.css'
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReviewSection from '../ReviewSection/ReviewSection';



const ServiceDetails = () => {
    const details = useLoaderData();
    const { user } = useContext(AuthContext);
    const [userReview, setUserReview] = useState([])


    const { _id, serviceName, price, description, image } = details;

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setUserReview(data))
    }, [])

    const handlePlaceOrder = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        console.log(name, email, message)

        const review = {
            service_id: _id,
            photoUrl: user?.photoURL,
            serviceName,
            name,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Review placed successfully!')
                    form.reset()
                }
            })
            .catch(err => console.error(err))

    }


    return (
        <div className='grid col-span-1 lg:grid-cols-2 sm:grid-cols-1 service-details'>
            {/* <ServiceDetailCard /> */}
            <div className="card col-span-1 lg:card-side bg-base-100 shadow-xl" >
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
                    <table className="table-auto">
                        <thead>
                            <tr>
                                {
                                    userReview.map(uReview => <ReviewSection key={uReview._id} uReview={uReview} />)
                                }
                            </tr>
                        </thead>
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

